import { CategoryArchive } from "@/components/CategoryArchive";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "トピックス", path: "/category/topics/" });

export default function Page() {
  return <CategoryArchive slug="topics" page={1} />;
}
