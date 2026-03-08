import type { APIRoute } from "astro";

const baseUrl = "https://lp.picovoice.app";
const paths = [
  "/",
  "/en/",
  "/what-is-picovoice",
  "/en/what-is-picovoice",
  "/faq",
  "/en/faq",
  "/how-to-sell-vtuber-voice",
  "/en/how-to-sell-vtuber-voice",
  "/picovoice-vs-booth",
  "/en/picovoice-vs-booth",
];

export const GET: APIRoute = () => {
  const urlset = paths
    .map((path) => `<url><loc>${new URL(path, baseUrl).toString()}</loc></url>`)
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
