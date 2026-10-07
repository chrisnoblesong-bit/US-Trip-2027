
const supabase = require("../lib/supabase");
const { verifyRequest } = require("../lib/auth");

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (!verifyRequest(req)) {
    return res.status(401).json({ error: "먼저 로그인해 줘." });
  }

  try {
    if (req.method === "GET") {
      const [trips, hotels, settings] = await Promise.all([
        supabase.from("trip_plans").select("*"),
        supabase.from("trip_hotels").select("*"),
        supabase.from("trip_settings").select("*").eq("id", "main")
      ]);

      for (const result of [trips, hotels, settings]) {
        if (result.error) throw result.error;
      }

      return res.status(200).json({
        trips: trips.data,
        hotels: hotels.data.map(hotel => ({
          ...hotel,
          price: hotel.price == null ? "" : String(hotel.price)
        })),
        notes: settings.data[0]?.notes || "",
        initialized: settings.data.length > 0
      });
    }

    if (req.method !== "PUT") {
      res.setHeader("Allow", "GET, PUT");
      return res.status(405).json({ error: "허용되지 않은 요청입니다." });
    }

    const body = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

    if (
      !body ||
      !Array.isArray(body.trips) ||
      !Array.isArray(body.hotels) ||
      typeof body.notes !== "string" ||
      body.trips.length > 200 ||
      body.hotels.length > 100
    ) {
      return res.status(400).json({ error: "데이터 형식이 올바르지 않습니다." });
    }

    const trips = body.trips.map(t => ({
      id: String(t.id),
      date: t.date,
      city: String(t.city || "").slice(0, 100),
      title: String(t.title || "").slice(0, 120),
      details: String(t.details || "").slice(0, 1500),
      transport: String(t.transport || "").slice(0, 200),
      time: String(t.time || "").slice(0, 5)
    }));

    const hotels = body.hotels.map(h => ({
      id: String(h.id),
      city: String(h.city || "").slice(0, 100),
      name: String(h.name || "").slice(0, 150),
      address: String(h.address || "").slice(0, 300),
      price: h.price === "" || h.price == null ? null : Number(h.price),
      dates: String(h.dates || "").slice(0, 100),
      link: String(h.link || "").slice(0, 1000),
      notes: String(h.notes || "").slice(0, 1000)
    }));

    const validDate = value =>
      /^\d{4}-\d{2}-\d{2}$/.test(value) &&
      !Number.isNaN(Date.parse(value + "T00:00:00Z")) &&
      new Date(value + "T00:00:00Z").toISOString().slice(0, 10) === value;

    if (trips.some(t =>
      !t.id || t.id.length > 100 ||
      !validDate(t.date) || !t.city || !t.title ||
      (t.time && !/^\d{2}:\d{2}$/.test(t.time))
    )) {
      return res.status(400).json({ error: "일정 정보를 확인해 줘." });
    }

    if (hotels.some(h =>
      !h.id || h.id.length > 100 || !h.city || !h.name ||
      (h.price !== null && (!Number.isFinite(h.price) || h.price < 0))
    )) {
      return res.status(400).json({ error: "호텔 정보를 확인해 줘." });
    }

    if (new Set(trips.map(t => t.id)).size !== trips.length ||
        new Set(hotels.map(h => h.id)).size !== hotels.length) {
      return res.status(400).json({ error: "중복된 ID가 있습니다." });
    }

    // 먼저 현재 데이터를 저장하거나 갱신한다.
    if (trips.length) {
      const result = await supabase.from("trip_plans").upsert(trips);
      if (result.error) throw result.error;
    }

    if (hotels.length) {
      const result = await supabase.from("trip_hotels").upsert(hotels);
      if (result.error) throw result.error;
    }

    // 기존 ID 중 요청에 없는 행을 삭제한다.
    for (const [table, incoming] of [
      ["trip_plans", trips],
      ["trip_hotels", hotels]
    ]) {
      const old = await supabase.from(table).select("id");
      if (old.error) throw old.error;

      const keep = new Set(incoming.map(item => item.id));

      for (const row of old.data) {
        if (!keep.has(row.id)) {
          const removed = await supabase.from(table).delete().eq("id", row.id);
          if (removed.error) throw removed.error;
        }
      }
    }

    const savedNotes = await supabase.from("trip_settings").upsert({
      id: "main",
      notes: body.notes.slice(0, 10000)
    });

    if (savedNotes.error) throw savedNotes.error;

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Trip API error:", error.message);
    return res.status(500).json({ error: "저장 중 오류가 발생했어. 설정을 확인해 줘." });
  }
};
