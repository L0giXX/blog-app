import React from "react";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

async function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  if (!post) notFound();
  return post;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostFromParams(params.slug);
  const MDXComponent = getMDXComponent(post.body.code);

  return (
    <div>
      Test
      <div>{post.title}</div>
      <MDXComponent />
    </div>
  );
}
