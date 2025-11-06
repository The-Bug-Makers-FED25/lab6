import { useToggle } from "../../context/toggleThemeContext";
import BlogComments from "../BlogComments/BlogComments";

export function BlogBox ({title, content, author, date, id }) {
    const {light} = useToggle()


    return <div className={`m-auto p-8 w-fit min-w-[45ch] max-w-[80ch] flex flex-col gap-1 rounded-md drop-shadow-2xl ${light ? "bg-white" : "bg-darkg"}`}>
            <div className="flex flex-col gap-1.5">
                <h1 className={`text-pdark text-[2.5rem] font-bold ${light ? "" : "text-primary"}`}>{title}</h1>
                <p className={`${light ? "" : "text-neutral"}`}>{content}</p>
                <p className={`${light ? "" : "text-neutral"} font-bold`}>Author: {author ? author : "The Bug Makers"}</p>
                <p className={`${light ? "" : "text-neutral"} font-bold`}>Date: {date ? date : "11-06-2025"}</p>
            </div>
            <h2 className={`${light ? "" : "text-neutral"} text-[1.25rem]`}>Comments:</h2>
            <BlogComments id={id} />
        </div>
}