import { CONTACT_EMAIL } from "@/lib/site";

const MAX = { name: 100, business: 120, email: 150, phone: 30, message: 2000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort in-memory throttle (per server instance). Use a shared store
// or a provider-level limit for real protection.
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (limited(ip)) {
    return Response.json({ error: "Too many requests. Please try later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled: pretend success
  if (clean(body.website, 50)) return Response.json({ ok: true });

  const name = clean(body.name, MAX.name);
  const business = clean(body.business, MAX.business);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const message = clean(body.message, MAX.message);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please fill in your name, a valid email and a message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact form: RESEND_API_KEY / CONTACT_FROM_EMAIL not configured");
    return Response.json({ error: "The form is not available right now." }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Website enquiry from ${name}${business ? `, ${business}` : ""}`,
      html: `<p><b>Name:</b> ${esc(name)}</p><p><b>Business:</b> ${esc(business)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: email provider error", res.status);
    return Response.json({ error: "We could not send your message." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
