
/*
  아래 두 값만 네 Supabase 프로젝트 값으로 교체해 줘.
  service_role 키는 절대 넣지 마!
*/
const SUPABASE_URL = "여기에_프로젝트_URL";
const SUPABASE_ANON_KEY = "여기에_anon_또는_publishable_키";

const client = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const $ = id => document.getElementById(id);

const defaultData = {
  trips: [
    { id:"t1", date:"2027-01-30", city:"로스앤젤레스", title:"LA 도착 및 그리피스 천문대", details:"공항 도착 → 호텔 체크인 → 그리피스 천문대", transport:"Uber", time:"" },
    { id:"t2", date:"2027-01-31", city:"로스앤젤레스", title:"산타모니카 + 베니스 비치", details:"해변 산책 및 주변 관광", transport:"대중교통 + Uber", time:"" },
    { id:"t3", date:"2027-02-01", city:"로스앤젤레스", title:"유니버설 스튜디오", details:"유니버설 스튜디오 할리우드 방문", transport:"Metro", time:"" },
    { id:"t4", date:"2027-02-02", city:"로스앤젤레스", title:"할리우드 + 게티 센터", details:"할리우드 관광 및 게티 센터 방문", transport:"대중교통 + Uber", time:"" },
    { id:"t5", date:"2027-02-03", city:"이동", title:"라스베이거스 이동", details:"포시즌 투어 출발. 집결 장소 확인", transport:"투어 차량", time:"" },
    { id:"t6", date:"2027-02-04", city:"라스베이거스", title:"라스베이거스 관광", details:"관광 계획 입력하기", transport:"도보 / Uber", time:"" },
    { id:"t7", date:"2027-02-05", city:"라스베이거스", title:"라스베이거스 자유 일정", details:"관광 및 숙소 확인", transport:"도보 / Uber", time:"" },
    { id:"t8", date:"2027-02-06", city:"이동", title:"도시 간 이동", details:"출발지와 도착지 확인", transport:"미정", time:"" },
    { id:"t9", date:"2027-02-07", city:"샌디에이고", title:"샌디에이고 관광", details:"방문할 관광지 입력하기", transport:"미정", time:"" },
    { id:"t10", date:"2027-02-08", city:"샌디에이고", title:"샌디에이고 자유 일정", details:"방문할 관광지 입력하기", transport:"미정", time:"" },
    { id:"t11", date:"2027-02-09", city:"로스앤젤레스", title:"LA 복귀 및 마지막 숙박", details:"공항 이동이 편리한 숙소 확인", transport:"미정", time:"" },
    { id:"t12", date:"2027-02-10", city:"이동", title:"귀국 항공편", details:"항공편 시간과 공항 이동 확인", transport:"Uber / Lyft", time:"" }
  ],
  hotels: [],
  notes: ""
};

let data = { trips: [], hotels: [], notes: "" };
let busy = false;
let toastTimer;

function toast(message) {
  $("toast").textContent = message;
  $("toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("toast").classList.remove("show"), 3000);
}

function setBusy(value) {
  busy = value;
  document.querySelectorAll("#app button").forEach(button => {
    button.disabled = value;
  });
}

function element(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function showApp(visible) {
  $("app").hidden = !visible;
  $("loginPanel").hidden = visible;
}

function newId() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function formatDate(value) {
  if (!value) return "날짜 미정";
  const [, month, day] = value.split("-");
  return `${month}월 ${day}일`;
}

async function checkResult(result) {
  if (result.error) throw result.error;
  return result.data;
}

/* 데이터베이스에서 일정, 호텔, 메모 불러오기 */
async function loadData() {
  const [trips, hotels, settings] = await Promise.all([
    client.from("trip_plans").select("*"),
    client.from("trip_hotels").select("*"),
    client.from("trip_settings").select("*").eq("id", "main")
  ]);

  await Promise.all([
    checkResult(trips),
    checkResult(hotels),
    checkResult(settings)
  ]);

  if (settings.data.length === 0) {
    data = structuredClone(defaultData);
    await saveData("기본 일정을 데이터베이스에 등록했어!");
    return;
  }

  data = {
    trips: trips.data,
    hotels: hotels.data.map(h => ({
      ...h,
      price: h.price == null ? "" : String(h.price)
    })),
    notes: settings.data[0].notes || ""
  };

  render();
}

/*
  저장 방식:
  현재 목록을 upsert하고, 목록에서 삭제된 행은 DB에서도 삭제한다.
*/
async function saveData(message = "저장 완료!") {
  if (busy) return;

  setBusy(true);

  try {
    const trips = data.trips.map(t => ({
      id: String(t.id),
      date: t.date,
      city: t.city,
      title: t.title,
      details: t.details || "",
      transport: t.transport || "",
      time: t.time || ""
    }));

    const hotels = data.hotels.map(h => ({
      id: String(h.id),
      city: h.city,
      name: h.name,
      address: h.address || "",
      price: h.price === "" || h.price == null ? null : Number(h.price),
      dates: h.dates || "",
      link: h.link || "",
      notes: h.notes || ""
    }));

    if (trips.length) {
      await checkResult(
        await client.from("trip_plans").upsert(trips)
      );
    }

    if (hotels.length) {
      await checkResult(
        await client.from("trip_hotels").upsert(hotels)
      );
    }

    for (const [table, items] of [
      ["trip_plans", trips],
      ["trip_hotels", hotels]
    ]) {
      const existing = await checkResult(
        await client.from(table).select("id")
      );

      const keep = new Set(items.map(item => item.id));
      const remove = existing
        .map(item => item.id)
        .filter(id => !keep.has(id));

      if (remove.length) {
        await checkResult(
          await client.from(table).delete().in("id", remove)
        );
      }
    }

    await checkResult(
      await client.from("trip_settings").upsert({
        id: "main",
        notes: data.notes || ""
      })
    );

    render();
    toast(message);
  } catch (error) {
    console.error(error);
    toast("저장 실패: " + (error.message || "연결 설정을 확인해 줘."));
  } finally {
    setBusy(false);
  }
}

/* 일정 화면 */
function renderTrips() {
  const list = $("tripList");
  list.replaceChildren();

  const filter = $("cityFilter").value;

  const trips = [...data.trips]
    .filter(t => filter === "all" || t.city === filter)
    .sort((a, b) => a.date.localeCompare(b.date) ||
      (a.time || "").localeCompare(b.time || ""));

  if (!trips.length) {
    list.append(element("p", "muted", "표시할 일정이 없어."));
  }

  for (const trip of trips) {
    const card = element("article", "trip-card");

    card.append(
      element("p", "muted", formatDate(trip.date)),
      element("h3", "", trip.title),
      element("p", "muted", trip.city)
    );

    if (trip.time) card.append(element("p", "", "🕒 " + trip.time));
    if (trip.details) card.append(element("p", "", trip.details));
    if (trip.transport) {
      card.append(element("p", "muted", "🚗 " + trip.transport));
    }

    const actions = element("div", "card-actions");
    const edit = element("button", "btn secondary", "수정");
    edit.type = "button";
    edit.addEventListener("click", () => openTrip(trip.id));

    const del = element("button", "btn danger", "삭제");
    del.type = "button";
    del.addEventListener("click", async () => {
      if (busy || !confirm(`"${trip.title}" 일정을 삭제할까?`)) return;

      const old = data.trips;
      data.trips = old.filter(t => t.id !== trip.id);
      await saveData("일정을 삭제했어!");
    });

    actions.append(edit, del);
    card.append(actions);
    list.append(card);
  }
}

function openTrip(id = "") {
  $("tripForm").reset();

  const trip = data.trips.find(t => t.id === id);

  $("tripId").value = id;
  $("tripDate").value = trip?.date || "2027-01-30";
  $("tripCity").value = trip?.city || "로스앤젤레스";
  $("tripTitle").value = trip?.title || "";
  $("tripDetails").value = trip?.details || "";
  $("tripTransport").value = trip?.transport || "";
  $("tripTime").value = trip?.time || "";

  $("tripDialog").showModal();
}

$("addTripBtn").addEventListener("click", () => openTrip());
$("cityFilter").addEventListener("change", renderTrips);

$("tripForm").addEventListener("submit", async event => {
  event.preventDefault();
  if (busy) return;

  const id = $("tripId").value || newId();
  const item = {
    id,
    date: $("tripDate").value,
    city: $("tripCity").value,
    title: $("tripTitle").value.trim(),
    details: $("tripDetails").value.trim(),
    transport: $("tripTransport").value.trim(),
    time: $("tripTime").value
  };

  if (!item.date || !item.title) return toast("날짜와 제목을 입력해 줘.");

  const index = data.trips.findIndex(t => t.id === id);
  if (index < 0) data.trips.push(item);
  else data.trips[index] = item;

  $("tripDialog").close();
  await saveData("일정을 저장했어!");
});

/* 호텔 화면 */
function renderHotels() {
  const list = $("hotelList");
  list.replaceChildren();

  if (!data.hotels.length) {
    list.append(element("p", "muted", "등록된 호텔이 없어. 호텔 추가를 눌러 줘."));
  }

  for (const hotel of data.hotels) {
    const card = element("article", "hotel-card");
    card.append(
      element("p", "muted", hotel.city),
      element("h3", "", hotel.name)
    );

    if (hotel.address) card.append(element("p", "", "📍 " + hotel.address));
    if (hotel.dates) card.append(element("p", "", "📅 " + hotel.dates));

    if (hotel.price !== "" && hotel.price != null) {
      card.append(element("p", "hotel-price", `1박 $${Number(hotel.price).toLocaleString()}`));
    }

    if (hotel.notes) card.append(element("p", "", hotel.notes));

    if (hotel.link) {
      try {
        const url = new URL(hotel.link);
        if (["https:", "http:"].includes(url.protocol)) {
          const link = element("a", "", "호텔 웹사이트 / 예약 링크 ↗");
          link.href = url.href;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          card.append(link);
        }
      } catch {}
    }

    const actions = element("div", "card-actions");
    const edit = element("button", "btn secondary", "수정");
    edit.type = "button";
    edit.addEventListener("click", () => openHotel(hotel.id));

    const del = element("button", "btn danger", "삭제");
    del.type = "button";
    del.addEventListener("click", async () => {
      if (busy || !confirm(`${hotel.name} 호텔 정보를 삭제할까?`)) return;
      data.hotels = data.hotels.filter(h => h.id !== hotel.id);
      await saveData("호텔 정보를 삭제했어!");
    });

    actions.append(edit, del);
    card.append(actions);
    list.append(card);
  }
}

function openHotel(id = "") {
  $("hotelForm").reset();

  const hotel = data.hotels.find(h => h.id === id);

  $("hotelId").value = id;
  $("hotelCity").value = hotel?.city || "로스앤젤레스";
  $("hotelName").value = hotel?.name || "";
  $("hotelAddress").value = hotel?.address || "";
  $("hotelPrice").value = hotel?.price ?? "";
  $("hotelDates").value = hotel?.dates || "";
  $("hotelLink").value = hotel?.link || "";
  $("hotelNotes").value = hotel?.notes || "";

  $("hotelDialog").showModal();
}

$("addHotelBtn").addEventListener("click", () => openHotel());

$("hotelForm").addEventListener("submit", async event => {
  event.preventDefault();
  if (busy) return;

  const id = $("hotelId").value || newId();
  const link = $("hotelLink").value.trim();

  if (link) {
    try {
      if (!["http:", "https:"].includes(new URL(link).protocol)) {
        return toast("호텔 링크를 확인해 줘.");
      }
    } catch {
      return toast("호텔 링크 주소를 확인해 줘.");
    }
  }

  const item = {
    id,
    city: $("hotelCity").value,
    name: $("hotelName").value.trim(),
    address: $("hotelAddress").value.trim(),
    price: $("hotelPrice").value,
    dates: $("hotelDates").value.trim(),
    link,
    notes: $("hotelNotes").value.trim()
  };

  const index = data.hotels.findIndex(h => h.id === id);
  if (index < 0) data.hotels.push(item);
  else data.hotels[index] = item;

  $("hotelDialog").close();
  await saveData("호텔 정보를 저장했어!");
});

function render() {
  renderTrips();
  renderHotels();
  $("notes").value = data.notes || "";
}

/* 메모 */
$("saveNotesBtn").addEventListener("click", async () => {
  if (busy) return;
  data.notes = $("notes").value;
  await saveData("메모를 저장했어!");
});

/* 백업 다운로드 */
$("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "my-us-trip-backup.json";
  a.click();
  URL.revokeObjectURL(url);
});

/* 백업 복원 */
$("importBtn").addEventListener("click", () => $("importFile").click());

$("importFile").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const imported = JSON.parse(await file.text());

    if (!Array.isArray(imported.trips) ||
        !Array.isArray(imported.hotels) ||
        typeof imported.notes !== "string") {
      throw new Error("백업 파일 형식이 올바르지 않아.");
    }

    if (!confirm("현재 데이터가 백업 파일의 내용으로 바뀌어. 계속할까?")) return;

    data = imported;
    await saveData("백업을 복원했어!");
  } catch (error) {
    toast(error.message || "백업 파일을 읽지 못했어.");
  } finally {
    event.target.value = "";
  }
});

/* 대화상자 취소 */
document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => $(button.dataset.close).close());
});

/* 로그인과 로그아웃 */
$("loginForm").addEventListener("submit", async event => {
  event.preventDefault();
  $("loginMessage").textContent = "로그인 확인 중…";

  try {
    const { error } = await client.auth.signInWithPassword({
      email: $("email").value.trim(),
      password: $("password").value
    });

    if (error) throw error;

    $("password").value = "";
    await startApp();
  } catch (error) {
    $("loginMessage").textContent =
      "로그인 실패: " + (error.message || "계정 정보를 확인해 줘.");
  }
});

$("logoutBtn").addEventListener("click", async () => {
  const { error } = await client.auth.signOut();

  if (error) return toast("로그아웃에 실패했어.");

  showApp(false);
  $("loginMessage").textContent = "로그아웃했어.";
});

async function startApp() {
  try {
    $("loginMessage").textContent = "";
    await loadData();
    showApp(true);
    $("userLabel").textContent = "로그인됨 · 데이터베이스 연결 완료";
  } catch (error) {
    console.error(error);
    showApp(false);
    $("loginMessage").textContent =
      "데이터를 불러오지 못했어. SQL 권한과 연결 키를 확인해 줏.";
  }
}

/* 페이지를 열 때 기존 로그인 세션 확인 */
async function initialize() {
  showApp(false);

  if (
    SUPABASE_URL.includes("여기에_") ||
    SUPABASE_ANON_KEY.includes("여기에_")
  ) {
    $("loginMessage").textContent =
      "script.js 맨 위에 Supabase URL과 anon 키를 먼저 입력해 줘.";
    return;
  }

  const { data: { session } } = await client.auth.getSession();

  if (session) await startApp();
}

initialize();
