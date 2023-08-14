import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto mt-32 max-w-[640px] px-4 pb-32 text-gray-600">
      <div className="flex items-center gap-6">
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/marc-m%C3%BCller-929798253/"
        >
          LinkedIn
        </a>
        <a className="footer-link" href="https://github.com/L0giXX">
          Github
        </a>
        <a className="footer-link" href="https://twitter.com/L0giX_ATv">
          Twitter
        </a>
        <Link className="footer-link" href="/blog">
          Posts
        </Link>
      </div>
      <p className="mt-8 text-gray-500">
        Built with{" "}
        <a className="footer-link" href="https://nextjs.org">
          Next.js
        </a>
        ,{" "}
        <a className="footer-link" href="https://mdxjs.com">
          MDX
        </a>
        ,{" "}
        <a className="footer-link" href="https://tailwindcss.com">
          Tailwind
        </a>{" "}
        and{" "}
        <a className="footer-link" href="https://vercel.com">
          Vercel
        </a>
      </p>
    </div>
  );
}
