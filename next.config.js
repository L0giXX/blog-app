/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/blog/[slug]": ["node_modules/shiki/**/*"],
    },
    serverComponentsExternalPackages: ["shiki"],
  },
};

module.exports = nextConfig;
