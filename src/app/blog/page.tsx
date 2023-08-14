import { allPosts } from "contentlayer/generated";
import { formatDateofPosts } from "@/lib/formatDate";
import { notFound } from "next/navigation";
import Link from "next/link";

const server = process.env.SERVER_URL;

interface PostViews {
  id: string;
  title: string;
  views: number;
  createdAt: Date;
}

async function getViews() {
  const res = await fetch(`${server}/api/views`, {
    method: "GET",
    cache: "no-cache",
  });
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data.posts;
}

async function getAllPosts() {
  let posts = allPosts;
  if (!posts) return notFound();
  posts = formatDateofPosts(posts);
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export default async function Page() {
  let posts = await getAllPosts();
  const postViews = (await getViews()) as PostViews[];

  return (
    <div>
      <div className="mx-auto max-w-[640px] px-4">
        <div className="flex flex-col">
          {posts.map((post) => (
            <div key={post.slug} className="mb-8">
              <Link
                href={`/blog/${post.slugAsParams}`}
                className="block rounded-lg border border-gray-200 bg-white/20 p-4 shadow hover:bg-white/40"
              >
                <h1 className="text-lg font-semibold text-gray-700">
                  {post.title}
                </h1>
                <h2 className="text-sm text-gray-600">{post.date}</h2>
                {postViews?.length > 0 &&
                  postViews.map((postV) => (
                    <div key={postV.id}>
                      {postV.title === post.slugAsParams && (
                        <h2 className="mb-2 text-sm text-gray-600">
                          {postV.views} views
                        </h2>
                      )}
                    </div>
                  ))}
                <p className=" text-gray-500">{post.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
