import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const post = await prisma.post.findUnique({
    where: {
      title: slug,
    },
  });
  if (!post) {
    return NextResponse.json(null);
  }
  return NextResponse.json(post);
}

// Upsert is a combination of update and create. If the record exists, it will be updated. If it doesn't exist, it will be created.
export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const post = await prisma.post.upsert({
    where: {
      title: slug,
    },
    update: {
      views: { increment: 1 },
    },
    create: {
      title: slug,
      views: 1,
    },
  });
  return NextResponse.json(post);
}
