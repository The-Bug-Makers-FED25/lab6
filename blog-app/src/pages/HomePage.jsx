import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useToggle } from "../context/toggleThemeContext";

export default function HomePage() {
  const { username } = useAuth();
  const { light } = useToggle();

  return (
    <div className={`min-h-[150vh] flex flex-col items-center pt-20 gap-20 px-4
                     ${light ? "bg-grey text-black" : "bg-darkbg text-white"}`}>

        <div className={"flex flex-row items-center justify-center gap-40"}>
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4 w-80 text-center tracking-wide hover:scale-105 transition-all">
                Welcome to Our <p className={`hover:scale-120  transition-all hover:tracking-wider  ${light ? "hover:text-[#00a7ac]" : "hover:text-yellow-300"}`}>Blog App!</p></h1>
                <div className="flex gap-4 w-full justify-center">
                    {!username && (
                        <Link
                            to="/login"
                            className={`px-6 py-3 rounded-2xl w-[120px] text-center transition-all duration-200
                                ${light ? "bg-pdark text-white hover:scale-110" : "bg-primary text-black hover:scale-110"}`}
                        >
                            Login
                        </Link>
                    )}
                    <Link
                        to={username ? "/posts" : "/login"}
                        className={`px-6 py-3 rounded-2xl w-[120px] text-center transition-all duration-200
                            ${light ? "bg-pdark text-white hover:scale-110" : "bg-primary text-black hover:scale-110"}`}
                    >
                        Blogs
                    </Link>
                </div>
        </div>
            <img src="/lovely-man.jpg" className={"h-[225px] hover:scale-105 transition-all"} alt=""/>
        </div>

        <div className={"flex flex-row items-center justify-center pt-20 gap-40"}>
            <img src="/monkey.jpg" className={"h-[225px] hover:scale-105 transition-all"} alt=""/>
            <p className="text-lg mb-8 w-100 text-center max-w-xl hover:scale-105 transition-all">
                <h1 className={`text-4xl font-bold pb-8 ${light ? "hover:text-pdark" : "hover:text-primary"} hover:scale-115 transition-all`}>Who are we?</h1>
                The Bug Makers are a safe place to write, share, and explore posts.
                Log in to access blogs or explore more about the project.
            </p>
        </div>

        <div className={"flex flex-row items-center justify-center pt-20 gap-40 mb-8"}>
            <div className={"flex flex-col hover:scale-110 transition-all"}>
                <Link className={`text-4xl font-bold mb-4 w-100 text-center tracking-wide hover:scale-120 transition-all hover:underline ${light ? "hover:text-pdark" : "hover:text-primary"}`} to="/contact">Contact Us!</Link>
                <p className={"w-100 text-center"}>We'd love a message from you, be it your thoughts of what to change, or a bug you've discovered.</p>
            </div>

            <img src="/chuz.jpg" className={"h-[225px] hover:scale-105 transition-all"} alt=""/>
        </div>



    </div>
  );
}
