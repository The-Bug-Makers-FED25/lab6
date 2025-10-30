import { useState } from "react";


export default function BlogComments () {
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
        <>
            <form onSubmit={handleSubmit} className={"flex flex-col gap-2 w-full items-center"}>
                <p>Name:</p>
                <input type="text" className={"h-10 w-full p-2 border-2 border-gray-500 rounded-3xl focus:border-blue-500 outline-none"} value={newName} onChange={handleNameChange} placeholder=""/>
                <p>Comment: </p>
                <input type="text" className={"h-10 w-full p-2 border-2 border-gray-500 rounded-3xl focus:border-blue-500 outline-none"} value={newComment} onChange={handleCommentChange} placeholder=""/>
                <button type="submit" className={"h-10 bg-blue-500 w-[50%] rounded-2xl text-white hover:scale-110 transition-all"}>Submit</button>
            </form>

            <div className={"h-auto max-h-40 flex flex-col gap-1 p-2 w-full bg-white rounded-md overflow-y-scroll text-wrap"}>
                {comments.length === 0 ? (
                    <p className={"text-gray-400 text-center"}>No comments yet, be the first!</p>
                ) : (
                    comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                    ))
                )}
            </div>
        </>
    )
}