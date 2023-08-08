import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutoLinkHeadings from "rehype-autolink-headings/lib";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypePrettyCodeOptions } from "@/lib/rehypePrettyCode";

const rootDir = path.join(process.cwd(), "src", "content");

export const getPostByName = async (name: string) => {
  const id = name.replace(/\.mdx$/, "");
  const filePath = path.join(rootDir, `${id}.mdx`);

  const fileContent = fs.readFileSync(filePath);

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    description: string;
  }>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, rehypePrettyCodeOptions],
          rehypeSlug,
          [
            rehypeAutoLinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      description: frontmatter.description,
    },
    content,
  };
  return blogPostObj;
};

export async function getAllPostsMeta(): Promise<Meta[] | undefined> {
  const filesArray = fs.readdirSync(rootDir);

  const posts: Meta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts;
}
