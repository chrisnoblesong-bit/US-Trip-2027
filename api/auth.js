
const crypto = require("crypto");
const {
  createSessionCookie,
  clearSessionCookie,
  verifyRequest
} = require("../lib/auth");

function sameSecret(a, b) {
  const hash = value =>
    crypto.createHash("sha256").update(value).digest();

  return crypto.timingSafeEqual(hash(a), hash(b));
}

module.exports = function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "GET") {
    return res.status(200).json({
      authenticated: verifyRequest(req)
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "허용되지 않은 요청입니다." });
  }

  const body = typeof req.body === "string"
    ? (() => {
        try { return JSON.parse(req.body); }
        catch { return {}; }
      })()
    : (req.body || {});

  if (body.action === "logout") {
    res.setHeader("Set-Cookie", clearSessionCookie());
    return res.status(200).json({ authenticated: false });
  }

  if (body.action !== "login") {
    return res.status(400).json({ error: "잘못된 요청입니다." });
  }

  const expected = process.env.TRIP_ADMIN_PASSWORD;
  if (!expected || typeof body.password !== "string") {
    return res.status(401).json({ error: "로그인 정보를 확인해 줘." });
  }

  if (!sameSecret(body.password, expected)) {
    return res.status(401).json({ error: "비밀번호가 올바르지 않아." });
  }

  res.setHeader("Set-Cookie", createSessionCookie());
  return res.status(200).json({ authenticated: true });
};
