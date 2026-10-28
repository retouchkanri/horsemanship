import { PageTitle } from "./PageTitle";
import { Pager, PostList } from "./PostList";
import { TOPICS_PER_PAGE, categories, postsInCategory, type Category } from "@/lib/posts";

export function categoryPageCount(slug: Category["slug"]) {
  return Math.max(1, Math.ceil(postsInCategory(slug).length / TOPICS_PER_PAGE));
}

export function categoryPagePath(slug: Category["slug"], page: number) {
  return page <= 1 ? `/category/${slug}/` : `/category/${slug}/page/${page}/`;
}

/** カテゴリーの記事一覧（1ページ10件） */
export function CategoryArchive({ slug, page }: { slug: Category["slug"]; page: number }) {
  const all = postsInCategory(slug);
  const items = all.slice((page - 1) * TOPICS_PER_PAGE, page * TOPICS_PER_PAGE);
  const total = categoryPageCount(slug);

  return (
    <>
      <section className="entry">
        <PageTitle main={categories[slug].name} />
        <PostList posts={items} />
      </section>
      <Pager
        prev={page > 1 ? { href: categoryPagePath(slug, page - 1), label: "前のページ" } : undefined}
        next={page < total ? { href: categoryPagePath(slug, page + 1), label: "次のページ" } : undefined}
      />
    </>
  );
}
