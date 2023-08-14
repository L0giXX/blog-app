import React from "react";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { formatDateofPost } from "@lib/formatDate";

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
  return data;
}

async function upsertViews(id: string) {
  const res = await fetch(`${server}/api/views/${id}`, {
    method: "POST",
    cache: "no-cache",
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error);
  }
}

async function getPostFromParams(slug: string) {
  let post = allPosts.find((post) => post.slugAsParams === slug);
  if (!post) notFound();
  post = formatDateofPost(post);
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostFromParams(params.slug);
  return {
    title: post.title,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  await upsertViews(params.slug);
  const postViews = (await getViewsById(params.slug)) as viewsPerPost;
  const { views } = postViews;
  let post = await getPostFromParams(params.slug);
  const MDXComponent = getMDXComponent(post.body.code);
  return (
    <div>
      <div className="mx-auto max-w-[640px] rounded-lg bg-white/50 p-4">
        <h1 className="mb-2 text-4xl font-semibold text-gray-700">
          {post.title}
        </h1>
        <h2 className="text-sm text-gray-600">{post.date}</h2>
        <h2 className="mb-4 text-sm text-gray-600">{views} views</h2>
        <div className="prose prose-pre:mt-0 prose-pre:rounded-t-none prose-pre:bg-white/30 prose-pre:px-0">
          <MDXComponent />
        </div>
      </div>
    </div>
  );
}
