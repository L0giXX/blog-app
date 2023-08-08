import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [rehypeHighlight],
  },
});
export default withMDX(nextConfig);
