import { CategoryArchive } from "@/components/CategoryArchive";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "お知らせ", path: "/category/news/" });

export default function Page() {
  return <CategoryArchive slug="news" page={1} />;
}
