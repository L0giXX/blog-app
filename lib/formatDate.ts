interface PostMeta {
  title: string;
  author: string;
  publishedAt: string;
  description: string;
  slug: string;
}

export function formatDate(date: PostMeta[]) {
  for (let i = 0; i < date.length; i++) {
    const newDate = new Date(date[i].publishedAt);
    date[i].publishedAt = newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return date;
}
