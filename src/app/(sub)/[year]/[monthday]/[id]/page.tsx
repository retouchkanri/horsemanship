import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { Pager } from "@/components/PostList";
import { pageMetadata } from "@/lib/metadata";
import { adjacentPosts, findPost, formatDateSlash, postParams, postPath, posts } from "@/lib/posts";
import styles from "./page.module.css";

type Params = { year: string; monthday: string; id: string };
type Props = { params: Promise<Params> };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return posts.map(postParams);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, monthday, id } = await params;
  const post = findPost(year, monthday, id);
  if (!post) return {};
  return pageMetadata({
    title: post.metaTitle ?? post.title,
    description: post.description,
    path: postPath(post),
  });
}

export default async function Page({ params }: Props) {
  const { year, monthday, id } = await params;
  const post = findPost(year, monthday, id);
  if (!post) notFound();
  const { prev, next } = adjacentPosts(post);

  return (
    <>
      <article id={`post-${post.id}`} className="entry">
        <header>
          <PageTitle main={post.title} />
        </header>
        <div className="post">
          {post.body}
          <p className={styles.date}>
            <time dateTime={post.date}>{formatDateSlash(post.date)}</time>
          </p>
        </div>
      </article>
      <Pager
        prev={prev && { href: postPath(prev), label: "前のページ" }}
        next={next && { href: postPath(next), label: "次のページ" }}
      />
    </>
  );
}
