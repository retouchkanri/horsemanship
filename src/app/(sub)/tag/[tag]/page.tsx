import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTitle } from "@/components/PageTitle";
import { PostList } from "@/components/PostList";
import { pageMetadata } from "@/lib/metadata";
import { postsWithTag, tags, type Tag } from "@/lib/posts";

type Props = { params: Promise<{ tag: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return tags.map((tag) => ({ tag }));
}

/** 日本語のタグ名はエンコードされた状態で渡ってくる場合があるため両方に対応する */
function resolveTag(raw: string): Tag | undefined {
  let name = raw;
  try {
    name = decodeURIComponent(raw);
  } catch {
    // そのまま使う
  }
  return tags.find((t) => t === name);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = resolveTag((await params).tag);
  if (!tag) return {};
  return pageMetadata({ title: tag, path: `/tag/${encodeURIComponent(tag)}/` });
}

export default async function Page({ params }: Props) {
  const tag = resolveTag((await params).tag);
  if (!tag) notFound();

  return (
    <section className="entry">
      <PageTitle main={tag} />
      <PostList posts={postsWithTag(tag)} />
    </section>
  );
}
