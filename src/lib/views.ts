import { prisma } from "@lib/prisma";

const server = process.env.SERVER_URL;

export async function createPost(id: string) {
  const post = await prisma.post.findMany({
    where: {
      title: id,
    },
  });
  if (post.length === 0) {
    const newPost = await prisma.post.create({
      data: {
        title: id,
      },
    });
    return newPost;
  }
  const updatedPost = await prisma.post.update({
    where: {
      title: id,
    },
    data: {
      views: { increment: 1 },
    },
  });
  return updatedPost;
}

export async function getViews() {
  const res = await fetch(`${server}/api/views`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
  });
  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();
  return data;
}
