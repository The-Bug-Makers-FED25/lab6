import {useState} from "react";
import { useToggle } from "../../context/toggleThemeContext"


export default function BlogCommentsForm({id, onCommentSubmit}){
    const {light} = useToggle();
    const [newComment, setNewComment] = useState("");
    const [newName, setNewName] = useState("");

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    }

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() === "" || newName.trim() === "") {
            return;
        }

        const commentData = {
            postId: id,
            name: newName,
            body: newComment,
            email: "placeholder@email.com"
        }

        onCommentSubmit(commentData);

        setNewComment("");
        setNewName("");
    }

    return(
        <form onSubmit={handleSubmit} className={"flex flex-col gap-2 w-full items-center"}>
            <p>Name:</p>
            <input type="text" required className={`h-10 w-full p-2 border-2 rounded-3xl focus:border-pdark outline-none ${light ? "border-gray-500" : "border-primary"} `} value={newName} onChange={handleNameChange} placeholder=""/>
            <p>Comment: </p>
            <input type="text" required className={`h-10 w-full p-2 border-2 rounded-3xl focus:border-pdark outline-none ${light ? "border-gray-500" : "border-primary"} `} value={newComment} onChange={handleCommentChange} placeholder=""/>
            <button type="submit" className={`h-10 bg-pdark w-[50%] rounded-2xl hover:scale-110 transition-all mb-1 ${light ? "text-white" : "bg-primary text-black"}`}>Submit</button>
        </form>
    )
}