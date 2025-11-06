import { Link } from "react-router-dom";
import { BlogBox } from "../components/BlogBox/BlogBox";
import { useToggle } from "../context/toggleThemeContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogPostsPage(){

  const {light} = useToggle();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); // required for loading solution
  const [error, setError] = useState(null); // required for error solution

  useEffect(() => { // just copy paste this and change url
    setLoading(true);
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => setPosts(response.data))
    .catch(e => {
      console.error("Error fetching posts:", e.message);
      console.log(e.message)
      setError("Error fetching posts: " + e.message);
    });
    setLoading(false);
}, []);

    return (
    <div className={`flex flex-col items-center gap-8 p-8 ${posts.length > 0 ? "" : "h-[75vh]"} ${light ? "" : "bg-black"}}`}>
      {error && !loading && // Copy paste this for error solution
        <div className={`m-auto p-8 w-fit min-w-[45ch] max-w-[80ch] flex flex-col gap-1 rounded-md drop-shadow-2xl text-center align-middle ${light ? "text-black bg-white" : "text-white bg-darkg"}`}>
          <h1 className={`font-bold mb-4 text-3xl ${light ? "text-pdark" : "text-primary"}`}>Uh oh, there was an error with your request</h1>
          <p>{error}</p>
          <button onClick={() => setError(null)} className={`bg-none cursor-pointer hover:underline ${light ? "text-pdark" : "text-primary"}`}>OK</button>
        </div>}
      {loading ? // This is tricky but first part of this ternary is the loading solution the second half is post page specific will need to slightly adjust
        <div className={`m-auto p-8 w-fit min-w-[45ch] max-w-[80ch] flex gap-0 rounded-md drop-shadow-2xl justify-center items-baseline ${light ? "text-black bg-white" : "text-white bg-darkg"}`}>
          <span className={`font-bold text-3xl ${light ? "text-pdark" : "text-primary"}`}>Loading</span>
          <span className={`font-bold text-4xl animate-pulse ${light ? "text-pdark" : "text-primary"}`}>.</span>
          <span className={`font-bold text-4xl animate-pulse delay-75 ${light ? "text-pdark" : "text-primary"}`}>.</span>
          <span className={`font-bold text-4xl animate-pulse delay-100 ${light ? "text-pdark" : "text-primary"}`}>.</span>
        </div>
         : posts.length > 0 ? posts.map(post => (
        <div key={post.id} className="w-full flex flex-col items-center">
          <BlogBox {...post} />
          <Link
            to={`/posts/${post.id}`}
            className= {`hover:underline mt-2 ${light ? "text-pdark" : "text-primary"}`}
          >
            Read More
          </Link>
        </div>
      )) : /* This line just makes sure there isn't nothing on the page, you can adjust it based on current pages stuff */ error ? <div></div> : <div className="h-full flex items-center"> <p className={`font-bold mb-4 text-3xl ${light ? "text-pdark" : "text-primary"}`}>Nothing to show yet</p> </div>}
    </div>
  );
}