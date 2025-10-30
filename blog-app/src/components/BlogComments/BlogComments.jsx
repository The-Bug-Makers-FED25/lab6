import { useState } from "react";
import { useToggle } from "../../context/toggleThemeContext";


export default function BlogComments () {
    const {light} = useToggle()
    const [comments, setComments] = useState([]);
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
        const formattedComment = `${newName}: ${newComment}`;
        setComments([formattedComment, ...comments]);
        setNewComment("");
        setNewName("");
    }


    return (
        <div className={`${light ? "" : "text-neutral"}`}>
            <form onSubmit={handleSubmit} className={"flex flex-col gap-2 w-full items-center"}>
                <p>Name:</p>
                <input type="text" className={`h-10 w-full p-2 border-2 rounded-3xl focus:border-pdark outline-none ${light ? "border-gray-500" : "border-primary"} `} value={newName} onChange={handleNameChange} placeholder=""/>
                <p>Comment: </p>
                <input type="text" className={`h-10 w-full p-2 border-2 rounded-3xl focus:border-pdark outline-none ${light ? "border-gray-500" : "border-primary"} `} value={newComment} onChange={handleCommentChange} placeholder=""/>
                <button type="submit" className={`h-10 bg-pdark w-[50%] rounded-2xl hover:scale-110 transition-all mb-1 ${light ? "text-white" : "bg-primary text-black"}`}>Submit</button>
            </form>

            <div className={`h-auto max-h-40 flex flex-col gap-1 p-2 w-full rounded-md overflow-y-auto text-wrap ${light ? "bg-white" : ""}`}>
                {comments.length === 0 ? (
                    <p className={` text-center ${light ? "text-gray-400" : ""}`}>No comments yet, be the first!</p>
                ) : (
                    comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                    ))
                )}
            </div>
        </div>
    )
}