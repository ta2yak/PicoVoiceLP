# Deploy Guide (Cloudflare Pages)

## 1. Repository Connection

1. Cloudflare DashboardでPagesプロジェクトを作成
2. GitHubリポジトリ `ta2yak/PicoVoiceLP` を接続

## 2. Build Settings

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`（このリポジトリ直下）
- Production branch: `main`

## 3. Domain Settings

1. Custom domainに `lp.picovoice.app` を追加
2. DNSがCloudflare管理であれば推奨レコードを適用
3. SSL証明書がActiveになるまで待機

## 4. Validation Checklist

- `https://lp.picovoice.app/sitemap.xml` が200
- `https://lp.picovoice.app/robots.txt` が200
- `https://lp.picovoice.app/llms.txt` が200
- 各ページのcanonicalが `https://lp.picovoice.app/...` になっている

## 5. Post Launch

- Google Search Consoleにサイトマップを登録
- Bing Webmaster Toolsにサイトマップを登録
