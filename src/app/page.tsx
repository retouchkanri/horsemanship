import { HomePage } from "@/components/HomePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "高校生の馬術大会「全国高校生馬術選手権大会（公式）」",
  description:
    "全国高校生馬術選手権大会は、全日本高等学校馬術競技大会（インターハイ）とは違い、高校馬術部に所属していない個人でも参加申込が可能。引退競走馬を引き取り馬術競技馬として活躍する馬たちが勢ぞろい。",
  keywords: "引退馬,引退競走馬,高校,インターハイ,馬術,イベント,協賛,スポンサー,乗馬クラブ,乗馬大会,売馬,売り馬",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
