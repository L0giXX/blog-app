import React from "react";
import Link from "next/link";
import { getAllPostsMeta } from "../../../lib/mdx";
import { formatDate } from "../../../lib/formatDate";

interface PostMeta {
  title: string;
  author: string;
  publishedAt: string;
  description: string;
  slug: string;
}

export default async function Page() {
  let posts = (await getAllPostsMeta()) as PostMeta[];
  posts = formatDate(posts);
  return (
    <div>
      <div className="mx-auto max-w-[640px] px-4">
        <div className="flex flex-col">
          {posts?.map((post) => (
            <div key={post.title} className="mb-8">
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-gray-200 bg-white/20 p-4 shadow hover:bg-white/40"
              >
                <h1 className="text-lg font-semibold text-gray-700">
                  {post.title}
                </h1>
                <h2 className="mb-2 text-sm text-gray-600">
                  {post.publishedAt}
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
