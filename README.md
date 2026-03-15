# PicoVoice LP

Cloudflare Pages向けのPicoVoice LLMOサイトです。

## Setup

```bash
npm install
```

## Local Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

## Type/Content Check

```bash
npm run check
```

## OGP Image Generation

Generate `public/og-image.png` from the live landing page first view (`/`):

1. Start dev server in another terminal:

```bash
npm run dev
```

2. Run generator:

```bash
npm run og:generate
```

Optional:
- Use a custom capture URL with `OG_CAPTURE_URL`:

```bash
OG_CAPTURE_URL=http://127.0.0.1:4321/ npm run og:generate
```

## Pages設定

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Site URL: `https://lp.picovoice.app`

詳細は `docs/deploy.md` を参照してください。
