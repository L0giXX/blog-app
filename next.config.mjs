import rehypePrettyCode from "rehype-pretty-code";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "github-dark",
};

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
module.exports = withMDX(nextConfig);
