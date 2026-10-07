

const crypto = require("crypto");

function sign(payload) {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET이 설정되지 않았습니다.");

  return crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("base64url");
}

function createSessionCookie() {
  const payload = Buffer.from(JSON.stringify({
    exp: Date.now() + 8 * 60 * 60 * 1000
  })).toString("base64url");

  const token = payload + "." + sign(payload);

  return `trip_session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`;
}

function clearSessionCookie() {
  return "trip_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0";
}

function verifyRequest(req) {
  try {
    const cookieHeader = req.headers.cookie || "";
    const match = cookieHeader.match(/(?:^|;\s*)trip_session=([^;]+)/);
    if (!match) return false;

    const parts = match[1].split(".");
    if (parts.length !== 2) return false;

    const [payload, signature] = parts;
    const expected = sign(payload);

    const a = Buffer.from(signature);
    const b = Buffer.from(expected);

    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
      return false;
    }

    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    );

    return Number.isFinite(session.exp) && session.exp > Date.now();
  } catch {
    return false;
  }
}

module.exports = {
  createSessionCookie,
  clearSessionCookie,
  verifyRequest
};
