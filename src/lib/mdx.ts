import fs from "fs";
import fsP from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutoLinkHeadings from "rehype-autolink-headings/lib";
import rehypeSlug from "rehype-slug";
import rehypePrism from "rehype-prism-plus";
import rehypeCode, { Options } from "rehype-pretty-code";
import rehypeCodeTitles from "rehype-code-titles";
import * as shiki from "shiki";

const getShikiPath = (): string => {
  return path.join(process.cwd(), "src/lib/shiki");
};

const touched = { current: false };

const touchShikiPath = (): void => {
  if (touched.current) return; // only need to do once
  fsP.readdir(getShikiPath()); // fire and forget
  touched.current = true;
};

const getHighlighter: Options["getHighlighter"] = async (options) => {
  touchShikiPath();

  const highlighter = await shiki.getHighlighter({
    // This is technically not compatible with shiki's interface but
    // necessary for rehype-pretty-code to work
    // - https://rehype-pretty-code.netlify.app/ (see Custom Highlighter)
    ...(options as any),
    paths: {
      languages: `${getShikiPath()}/languages/`,
      themes: `${getShikiPath()}/themes/`,
    },
  });

  return highlighter;
};

const getRehypeCodeOptions = (): Partial<Options> => ({
  // Requirements for theme:
  // - Has light and dark version
  // - Uses italic in several places
  theme: "github-dark",
  // Need to use a custom highlighter because rehype-pretty-code doesn't
  // let us customize "paths".
  getHighlighter,
});

const rootDir = path.join(process.cwd(), "src/app/content");

export const getPostByName = async (name: string) => {
  const id = name.replace(/\.mdx$/, "");
  const filePath = path.join(rootDir, `${id}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX<{
    title: string;
    date: string;
    description: string;
  }>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        development: process.env.NODE_ENV === "development",
        rehypePlugins: [
          [rehypeCode, getRehypeCodeOptions()],
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
