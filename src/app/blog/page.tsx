import React from "react";
import Link from "next/link";
import { getAllPostsMeta } from "@lib/mdx";
import { formatDate } from "@lib/formatDate";

interface PostViews {
  id: string;
  title: string;
  createdAt: string;
  views: number;
}

async function getViews() {
  const server = process.env.SERVER_URL;
  const res = await fetch(`${server}/api/views`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error);
  }
  return data;
}

export default async function Page() {
  let posts = await getAllPostsMeta();
  let postViews: PostViews[] = await getViews();
  if (!posts) return null;
  if (!postViews) return null;
  posts = formatDate(posts);
  posts = posts.map((post) => {
    const matchingView = postViews.find((postV) => postV.title === post.id);
    if (matchingView) {
      return {
        ...post,
        views: matchingView.views,
      };
    }
    return post;
  });
  return (
    <div>
      <div className="mx-auto max-w-[640px] px-4">
        <div className="flex flex-col">
          {posts.map((post) => (
            <div key={post.id} className="mb-8">
              <Link
                href={`/blog/${post.id}`}
                className="block rounded-lg border border-gray-200 bg-white/20 p-4 shadow hover:bg-white/40"
              >
                <h1 className="text-lg font-semibold text-gray-700">
                  {post.title}
                </h1>
                <h2 className="text-sm text-gray-600">{post.date}</h2>
                <h2 className="mb-2 text-sm text-gray-600">
                  {post.views} views
                </h2>
                <p className=" text-gray-500">{post.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
