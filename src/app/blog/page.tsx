import { allPosts } from "contentlayer/generated";
import { formatDateofPosts } from "@/lib/formatDate";
import { notFound } from "next/navigation";
import Link from "next/link";
import Views from "./views-component";

async function getAllPosts() {
  let posts = allPosts;
  if (!posts) return notFound();
  posts = formatDateofPosts(posts);
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export default async function Page() {
  const posts = await getAllPosts();

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
                <Views post={post} />
                <p className=" text-gray-500">{post.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
