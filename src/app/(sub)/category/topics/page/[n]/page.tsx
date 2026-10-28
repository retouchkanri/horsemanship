import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryArchive, categoryPageCount, categoryPagePath } from "@/components/CategoryArchive";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ n: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: categoryPageCount("topics") - 1 }, (_, i) => ({ n: String(i + 2) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { n } = await params;
  return pageMetadata({ title: `トピックス - Part ${n}`, path: categoryPagePath("topics", Number(n)) });
}

export default async function Page({ params }: Props) {
  const { n } = await params;
  const page = Number(n);
  if (!Number.isInteger(page) || page < 2 || page > categoryPageCount("topics")) notFound();
  return <CategoryArchive slug="topics" page={page} />;
}
