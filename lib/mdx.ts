import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDir = path.join(process.cwd(), "src", "app", "content");

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDir, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath);

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
  });
  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDir);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }
  return posts;
};
