import { Link } from "react-router-dom";
import { BlogBox } from "../components/BlogBox/BlogBox";
import { useToggle } from "../context/toggleThemeContext";

export default function BlogPostsPage(){

  const {light} = useToggle();

    const blogPosts = [
        {
            id: 1,
            title: "My First Blog!",
            content: "I uh... I uh haven't done this before...",
            author: "Joshua C. Price",
            date: "10-22-2025",
            initialComments: ["He's pretty freaking goated", "This guy isn't human..."] 
        },
        // {
        //     id: 2,
        //     title: "My Second Blog!",
        //     content: "Dont listen to Josh... He has done this before...",
        //     author: "Cailean M. Matthews.",
        //     date: "10-23-2025",
        //     initialComments:["He's the smartest guy i've ever met", "Don't mess with him... his eyes turn red when he's mad..."]
        // }
    ];

    return (
    <div className={`flex flex-col items-center gap-8 p-8 min-h-screen ${light ? "" : "bg-black"}}`}>
      {blogPosts.map(post => (
        <div key={post.id} className="w-full flex flex-col items-center">
          <BlogBox {...post} />
          <Link
            to={`/posts/${post.id}`}
            className= {`hover:underline mt-2 ${light ? "text-pdark" : "text-primary"}`}
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}