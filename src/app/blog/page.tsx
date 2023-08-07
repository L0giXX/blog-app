import React from "react";
import Link from "next/link";
import { getAllPostsMeta } from "../../../lib/mdx";

interface PostMeta {
  title: string;
  author: string;
  slug: string;
}

export default async function Page() {
  const posts = (await getAllPostsMeta()) as PostMeta[];

  return (
    <div>
      <div className="mx-auto max-w-[640px] px-4">
        <div className="flex flex-col">
          <div className="mb-8">
            {posts?.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.title}
                className="block rounded-lg border border-gray-200 bg-white p-6 text-black shadow duration-200 hover:bg-gray-200"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
