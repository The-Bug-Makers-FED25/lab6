import { useParams, Link } from "react-router-dom";
import { BlogBox } from "../components/BlogBox/BlogBox";

export default function IndividualPostPage() {
  const { id } = useParams();

  const post = {
    title: `Blog Post #${id}`,
    content: "Detailed view of a single blog post. Can expand this later to dynamically fetch data by ID.",
    author: "Bug Makers",
    date: "10-30-2025",
    initialComments: ["This post is gas!", "Can’t wait to read more!"]
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-grey min-h-screen">
      <BlogBox {...post} />
      <Link to="/" className="text-blue-500 hover:underline">← Back to all posts</Link>
    </div>
  );
}