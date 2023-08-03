import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="border-gray-200 bg-gray-900 py-6 ">
      <div className="container mx-auto flex items-center justify-center">
        <ul className="flex flex-wrap gap-10 px-10 text-4xl text-slate-100">
          <Link href="/">Home</Link>
          <Link href="/create-blog">Create New Blog</Link>
          <Link href="/api/auth/signin">Login</Link>
        </ul>
      </div>
    </nav>
  );
}
