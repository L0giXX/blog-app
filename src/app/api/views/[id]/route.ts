import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const post = await prisma.post.findUnique({
    where: {
      title: id,
    },
  });
  if (!post) {
    return NextResponse.json(null);
  }
  return NextResponse.json(post);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const post = await prisma.post.update({
    where: {
      title: id,
    },
    data: {
      views: { increment: 1 },
    },
  });
  if (!post) {
    return NextResponse.json("Post not found");
  }
  return NextResponse.json(post);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const post = await prisma.post.create({
    data: {
      title: id,
    },
  });
  return NextResponse.json(post);
}
