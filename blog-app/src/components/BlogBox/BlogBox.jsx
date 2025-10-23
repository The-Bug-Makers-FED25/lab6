import BlogComments from "../BlogComments/BlogComments";

export function BlogBox ({title, content, author, date }) {
    return <div className="m-auto p-4 w-fit min-w-[45ch] max-w-[80ch] flex flex-col gap-1 bg-white rounded-md drop-shadow-2xl">
            <div className="flex flex-col gap-1.5">
                <h1 className="text-pdark text-[2.5rem] font-bold">{title}</h1>
                <p>{content}</p>
                <p className="font-bold">Auhtor: {author}</p>
                <p className="font-bold">Date: {date}</p>
            </div>
            <h2 className="text-[1.25rem]">Comments:</h2>
            <BlogComments/>
        </ div>
}