/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "blog/[id]": ["node_modules/shiki/**/*"],
    },
  },
};

module.exports = nextConfig;
