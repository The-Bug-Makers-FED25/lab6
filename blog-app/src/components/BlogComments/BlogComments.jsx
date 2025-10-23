import { useState } from "react";


export default function BlogComments ({initialComments}) {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState("");

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() === "") {
            return;
        }
        setComments([newComment, ...comments]);
        setNewComment("");
    }


    return (
        <>
            <form onSubmit={handleSubmit} className={"flex flex-col gap-2 w-full items-center"}>
                <input type="text" className={"h-10 w-full p-2 border-2 border-gray-500 rounded-3xl focus:border-blue-500 outline-none"} value={newComment} onChange={handleInputChange} placeholder=""/>
                <button type="submit" className={"h-10 bg-blue-500 w-[50%] rounded-2xl text-white hover:scale-110 transition-all"}>Submit</button>
            </form>

            <div className={"h-auto max-h-40 flex flex-col gap-1 p-2 w-full bg-white rounded-md overflow-y-scroll text-wrap"}>
                {comments.map((comment, index) =>(
                    <p key={index}>• {comment}</p>
                ))}
            </div>
        </>
    )
}