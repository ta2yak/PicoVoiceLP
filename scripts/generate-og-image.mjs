#!/usr/bin/env node
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUTPUT_PATH = path.join(ROOT, "public", "og-image.png");

const BASE_URL = process.env.OG_CAPTURE_URL ?? "http://127.0.0.1:4321/";
const VIEWPORT_WIDTH = 1536;
const VIEWPORT_HEIGHT = 960;

async function main() {
  const screenshotPath = path.join(os.tmpdir(), `picovoice-og-capture-${Date.now()}.png`);
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({
      viewport: { width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT },
      deviceScaleFactor: 1,
    });

    await page.goto(BASE_URL, { waitUntil: "networkidle", timeout: 45_000 });
    await page.waitForSelector(".hero-lp", { timeout: 15_000 });

    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation: none !important;
          transition: none !important;
        }
        .sticky-cta {
          display: none !important;
        }
      `,
    });

    await page.screenshot({
      path: screenshotPath,
      fullPage: false,
      type: "png",
    });

    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await sharp(screenshotPath)
      .resize(1200, 630, {
        fit: "cover",
        position: "top",
      })
      .png({ compressionLevel: 9 })
      .toFile(OUTPUT_PATH);

    console.log(`Generated OG image: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error("Failed to generate og-image.png");
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  } finally {
    await browser.close();
    await fs.rm(screenshotPath, { force: true });
  }
}

main();

