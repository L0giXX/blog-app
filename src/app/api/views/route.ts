import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      views: true,
    },
  });
  return NextResponse.json({ posts });
}
