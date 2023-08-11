import { formatDate2 } from "@lib/formatDate";
import { getPostByName } from "@lib/mdx";

const server = process.env.SERVER_URL;

interface viewsPerPost {
  id: string;
  title: string;
  views: number;
  createdAt: Date;
}

async function getViewsById(id: string) {
  const res = await fetch(`${server}/api/views/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Error fetching views");
  }
  const data = await res.json();
  if (data === null) {
    const res = await fetch(`${server}/api/views/${id}`, {
      method: "POST",
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error);
    }
  } else return data;
}

async function getPost(id: string) {
  let post = await getPostByName(id);
  if (!post) return null;
  post = formatDate2(post);
  return post;
}

async function updateViews(id: string) {
  const res = await fetch(`${server}/api/views/${id}`, {
    method: "PUT",
    cache: "no-cache",
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error);
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const postViews = (await getViewsById(params.id)) as viewsPerPost;
  const post = await getPost(params.id);
  await updateViews(params.id);
  const { views } = postViews;
  const { title, date } = post!.meta;
  const content = post!.content;
  return (
    <div>
      <div className="mx-auto max-w-[640px] rounded-lg bg-white/50 p-4">
        <h1 className="mb-2 text-4xl font-semibold text-gray-700">{title}</h1>
        <h2 className="text-sm text-gray-600">{date}</h2>
        <h2 className="mb-4 text-sm text-gray-600">{views} views</h2>
        <article className="prose prose-pre:mt-0 prose-pre:rounded-t-none prose-pre:bg-white/30 prose-pre:px-0">
          {content}
        </article>
      </div>
    </div>
  );
}
