import type { APIRoute } from "astro";

const baseUrl = "https://lp.picovoice.app";
const paths = [
  "/",
  "/what-is-picovoice",
  "/how-to-sell-vtuber-voice",
  "/faq",
  "/picovoice-vs-booth",
  "/ai-guide",
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
