import { Link } from "react-router-dom";
import { BlogBox } from "../components/BlogBox/BlogBox";

export default function BlogPostsPage(){
    const blogPosts = [
        {
            id: 1,
            title: "My First Blog!",
            content: "I uh... I uh haven't done this before...",
            author: "Joshua C. Price",
            date: "10-22-2025",
        },
        // {
        //     id: 2,
        //     title: "My Second Blog!",
        //     content: "Dont listen to Josh... He has done this before...",
        //     author: "Cailean M. Matthews.",
        //     date: "10-23-2025",
        //     initialComments:["Everyone: He's the smartest guy i've ever met", "Mike Tyson: Don't mess with him... his eyes turn red when he's mad..."]
        // }
    ];

    return (
    <div className="flex flex-col items-center gap-8 p-8 bg-grey min-h-screen">
      {blogPosts.map(post => (
        <div key={post.id} className="w-full flex flex-col items-center">
          <BlogBox {...post} />
          <Link
            to={`/posts/${post.id}`}
            className="text-blue-500 hover:underline mt-2"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}