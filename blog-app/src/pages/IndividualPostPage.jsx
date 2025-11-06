import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BlogBox } from "../components/BlogBox/BlogBox";
import { useToggle } from "../context/toggleThemeContext";

export default function IndividualPostPage() {
  const { id } = useParams(); // get postId from URL
  const { light } = useToggle(); // your theme toggle context
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPostAndUser() {
      try {
        setLoading(true);
        setError(null);

        const postResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const postData = postResponse.data;
        setPost(postData);

        const userResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`
        );
        setUser(userResponse.data);
      } catch (err) {
        console.error("Error fetching post or user:", err.message);
        setError("Failed to fetch post details. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchPostAndUser();
  }, [id]);

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center h-[75vh] text-3xl ${
          light ? "text-pdark" : "text-primary"
        }`}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`flex flex-col justify-center items-center h-[75vh] text-center p-8 rounded-md drop-shadow-2xl ${
          light ? "bg-white text-black" : "bg-darkg text-white"
        }`}
      >
        <h1
          className={`font-bold mb-4 text-3xl ${
            light ? "text-pdark" : "text-primary"
          }`}
        >
          Uh oh, there was an error
        </h1>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className={`mt-4 underline cursor-pointer ${
            light ? "text-pdark" : "text-primary"
          }`}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div
        className={`flex justify-center items-center h-[75vh] text-2xl ${
          light ? "text-pdark" : "text-primary"
        }`}
      >
        No post found.
      </div>
    );
  }

  const postData = {
    title: post.title,
    content: post.body,
    author: user ? user.name : "Unknown Author",
    date: "11-06-2025",
    initialComments: ["This post is gas!", "Can’t wait to read more!"],
  };

  return (
    <div
      className={`flex flex-col items-center gap-4 p-8 transition-colors duration-300 ${
        light ? "bg-grey text-black" : "bg-darkbg text-white"
      }`}
    >
      <BlogBox {...postData} />
      {user && (
        <div
          className={`mt-4 p-4 rounded-md ${
            light ? "bg-white text-black" : "bg-darkg text-neutral"
          }`}
        >
          <h2 className="text-xl font-semibold">Author Details</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Company:</strong> {user.company?.name}
          </p>
        </div>
      )}
      <Link
        to="/"
        className={`mt-4 hover:underline ${
          light ? "text-pdark" : "text-primary"
        }`}
      >
        ← Back to all posts
      </Link>
    </div>
  );
}
