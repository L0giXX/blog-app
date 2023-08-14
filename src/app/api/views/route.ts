import { NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}
