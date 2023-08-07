import { getPostBySlug } from "../../../../lib/mdx";

interface PostMeta {
  title: string;
  author: string;
  slug: string;
}

interface PostData {
  meta: PostMeta;
  content: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = (await getPostBySlug(params.slug)) as unknown as PostData;

  return (
    <div>
      <div className="mx-auto max-w-[640px] px-4">
        <div className="mb-8">
          <h1 className="prose text-4xl font-bold">{post.meta.title}</h1>
          <div className="prose mt-8">{post.content}</div>
        </div>
      </div>
    </div>
  );
}
