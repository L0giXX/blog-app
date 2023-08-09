import fs from "fs";
import fsP from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutoLinkHeadings from "rehype-autolink-headings/lib";
import rehypeSlug from "rehype-slug";
import rehypeCode, { Options } from "rehype-pretty-code";
import * as shiki from "shiki";

// https://github.com/shikijs/shiki/issues/138#issuecomment-1057471160
// Since there are problems with using shiki in a Next.js production build,
// I used this workaround to get it to work. The trick is that we need to
// copy the shiki themes and languages outside of node_modules and into our
// project (src/lib/shiki). With this solution Vercel knows the existence of
// the shiki themes and languages, so they are included in the production build.

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
  theme: "light-plus",
  keepBackground: false,
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
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
