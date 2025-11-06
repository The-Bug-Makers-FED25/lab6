import {useEffect, useState, useCallback} from "react";
import { useToggle } from "../../context/toggleThemeContext";
import axios from "axios";
import BlogCommentsForm from "../BlogCommentsForm/BlogCommentsForm"



export default function BlogComments ({id}) {
    const {light} = useToggle()
    const [comments, setComments] = useState([]);

    const [loading, setLoading] = useState(false); // required for loading solution
    const [error, setError] = useState(null); // required for error solution



    const fetchComments = useCallback(() => { // just copy paste this and change url
        setLoading(true);
        setError(null);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => {
                setComments(response.data.map(comment => `${comment.name}: ${comment.body}`));
            })
            .catch(e => {
                console.error("Error fetching posts:", e.message);
                console.log(e.message)
                setError("Error fetching posts: " + e.message);
            })
            .finally(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    const handleAddComment = async (commentData) => {
        try {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, commentData);
            const newCommentString = `${response.data.name}: ${response.data.body}`;
            setComments(prevComments => [...prevComments, newCommentString]);
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    }

    return (
        <div className={`${light ? "" : "text-neutral"}`}>
            <BlogCommentsForm id={id} onCommentSubmit={handleAddComment}/>

            {loading} {error}

            <div className={`h-auto max-h-40 flex flex-col gap-1 p-2 w-full rounded-md overflow-y-auto text-wrap ${light ? "bg-white" : ""}`}>
                {comments.length === 0 ? (
                    <p className={` text-center ${light ? "text-gray-400" : ""}`}>No comments yet, be the first!</p>
                ) : (
                    comments.map((comment, index) => (
                       <div>
                        <p key={index}>{comment}</p>
                        <hr className="m-1"></hr>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}