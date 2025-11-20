import {useState} from "react";
import { useToggle } from "../../context/toggleThemeContext"
import { useAuth } from "../../context/authContext";


export default function BlogCommentsForm({id, onCommentSubmit}){
    const {light} = useToggle();
    const {username} = useAuth()

    const [newComment, setNewComment] = useState("");

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            return;
        }
        if (newComment.trim() === "" || username.trim() === "") {
            return;
        }

        const commentData = {
            postId: id,
            name: username,
            body: newComment,
            email: "placeholder@email.com"
        }

        onCommentSubmit(commentData);

        setNewComment("");
    }

    return(
        username ? 
        <form onSubmit={handleSubmit} className={"mt-4 flex flex-col gap-2 w-full items-center"}>
            <input type="text" required className={`h-10 w-full p-3 border-2 rounded-3xl focus:border-pdark outline-none ${light ? "border-gray-500" : "border-primary"} `} value={newComment} onChange={handleCommentChange} placeholder="Add to the conversation?"/>
            <button type="submit" className={`h-10 bg-pdark w-[50%] rounded-2xl hover:scale-110 transition-all mb-1 ${light ? "text-white" : "bg-primary text-black"}`}>Submit</button>
        </form>
        : 
        <h2 className={`text-2xl text-center font-bold mt-4 ${light ? "" : "text-primary"}`}>Must be logged in to leave a message</h2>
    )
}