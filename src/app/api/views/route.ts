import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

export const dynamic = "force-dynamic";

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
