# 全国中高生馬術選手権大会 公式サイト（Next.js 版）

旧サイト（https://horsemanship.biz/ ・WordPress）のページ構成・本文・画像をそのまま引き継ぎ、デザインのみを刷新した Next.js（App Router）サイトです。

## 動作環境

- Node.js 20.9 以上（推奨: 22 / 24）
- Next.js 16 / React 19 / TypeScript

## セットアップ

```bash
npm install
npm run dev      # 開発サーバー http://localhost:3000
npm run build    # 本番ビルド
npm start        # 本番サーバー
npm run lint     # ESLint
```

## ページ一覧

URL は旧サイトと同じ（末尾スラッシュ付き）です。

| URL | ページ |
| --- | --- |
| `/` , `/page/2/` | ホーム |
| `/about/` | 本大会の趣旨・目的 |
| `/access/` | 会場・アクセス案内 |
| `/qa/` | よくある質問Ｑ＆Ａ |
| `/promoter/` | 主催者情報 |
| `/contact/` → `/contact_thanks/` | お問い合わせ（フォーム）→ 完了 |
| `/boshu/` → `/boshu_thanks/` | 参加お申し込み（フォーム）→ 完了 |
| `/support/` → `/support_thanks/` | 協賛スポンサー募集（フォーム）→ 完了 |
| `/champion/` | 歴代優勝者・入賞者 |
| `/koho/` | 取材・リリース依頼 |
| `/daigaku/` | 大学馬術部関係者様 |
| `/horse/` | 主な活躍競技馬紹介 |
| `/category/topics/` , `/category/topics/page/2/` | トピックス一覧 |
| `/category/news/` | お知らせ一覧 |
| `/YYYY/MMDD/ID/`（例 `/2025/0420/393/`） | 記事（13件） |
| `/tag/馬術大会/` ほか計5件 | タグ一覧 |

## フォームのメール送信設定

3つのフォーム（お問い合わせ・参加申し込み・協賛申し込み）は「入力 → 確認画面 → 送信 → 完了ページ」の流れで、`/api/mail/` から SMTP でメール送信します。
`.env.example` をコピーして `.env.local`（本番はホスティングの環境変数）を設定してください。

```bash
cp .env.example .env.local
```

| 変数 | 内容 |
| --- | --- |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | SMTP サーバー |
| `SMTP_USER` / `SMTP_PASS` | SMTP 認証情報 |
| `MAIL_FROM` | 送信元アドレス |
| `MAIL_TO` | 受信先（事務局）アドレス。カンマ区切りで複数可 |

- 未設定の場合、開発環境（`npm run dev`）では送信内容をサーバーログに出力して完了ページへ進みます。本番環境では送信エラーとなり、画面にお電話での問い合わせ案内が表示されます。
- 旧サイト（メールフォームプロ）と同様に、氏名入力時のフリガナ自動入力、郵便番号からの住所自動入力（`/api/zip/` 経由で zipcloud を利用）に対応しています。

## ディレクトリ構成

```
public/images/theme/    旧テーマの画像（ロゴ・バナー・各ページ画像・メインビジュアル・CSS 背景画像のアイコン類）
public/images/uploads/  記事の画像
public/images/mfp/      旧フォーム（メールフォームプロ）の「必須」ラベル用光沢画像
src/app/                ページ（(sub) は本文＋サイドバーの下層ページ共通レイアウト）
src/app/api/            メール送信・郵便番号検索 API
src/components/         ヘッダー・メインビジュアル・ナビ・フッター・フォームなど
src/lib/site.ts         メニュー・電話番号・メインビジュアル・エリアリンク
src/lib/posts.tsx       記事データ（記事の追加・編集はここ）
src/lib/images.ts       画像サイズ一覧
```

## 補足

- 画像は旧サイトと同じく実寸を上限に表示し、拡大・トリミング・角丸などの加工はしていません。
- メインビジュアルは旧サイトの `random.js` と同じく、表示のたびに3グループ（各6枚）のうち1グループをランダム表示します。
- 旧サイトの HTML コメントで非表示になっていたポスター（`ban_poster_2020`）は、旧サイトと同様に表示していません。
- WordPress が自動生成していた添付ファイルページ（`/…/attachment/…/` など）とフィードは対象外です。
