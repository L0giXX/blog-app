import { formatDate2 } from "@/lib/formatDate";
import { getPostByName } from "@/lib/mdx";

export default async function Page({ params }: { params: { id: string } }) {
  let post = await getPostByName(params.id);
  if (!post) return null;
  post = formatDate2(post);
  const { title, date } = post.meta;
  const { content } = post;

  return (
    <div>
      <div className="mx-auto max-w-[640px] rounded-lg bg-white/50 p-4">
        <h1 className="mb-2 text-4xl font-semibold text-gray-700">{title}</h1>
        <h2 className="mb-4 text-sm text-gray-600">{date}</h2>
        <article className="prose prose-pre:mt-0 prose-pre:rounded-t-none prose-pre:bg-white/30 prose-pre:px-0">
          {content}
        </article>
      </div>
    </div>
  );
}
