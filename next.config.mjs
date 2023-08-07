import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
});
export default withMDX(nextConfig);
