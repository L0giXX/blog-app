import { Post } from "contentlayer/generated";

export function formatDateofPosts(posts: Post[]) {
  for (let i = 0; i < posts.length; i++) {
    const newDate = new Date(posts[i].date);
    posts[i].date = newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return posts;
}

export function formatDateofPost(post: Post) {
  const newDate = new Date(post.date);
  post.date = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return post;
}
