"use client";
import useSWR from "swr";
import Loading from "./loading";
import { Post } from "contentlayer/generated";

interface PostView {
  id: string;
  title: string;
  views: number;
}

export default function Views({ post }: { post: Post }) {
  const { data, error } = useSWR("/api/views", (url) =>
    fetch(url).then((res) => res.json())
  );
  const postView = data?.posts as PostView[];
  if (error)
    return <h2 className="mb-2 text-sm text-gray-600">Failed to load views</h2>;
  if (!data) return <Loading height="20" width="20" />;
  return (
    <div>
      {postView?.map((postV) => (
        <div key={postV.id}>
          {postV.title === post.slugAsParams && (
            <h2 className="mb-2 text-sm text-gray-600">{postV.views} views</h2>
          )}
        </div>
      ))}
    </div>
  );
}
