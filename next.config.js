const rehypePrettyCode = require("rehype-pretty-code");
/** @type {import('next').NextConfig} */
const nextConfig = {};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "github-dark",
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrettyCode, [rehypePrettyCode, options]],
  },
});

module.exports = withMDX(nextConfig);
