import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useToggle } from "../context/toggleThemeContext";

export default function HomePage() {
  const { username } = useAuth();
  const { light } = useToggle();

  return (
    <div className={`min-h-fit flex flex-col items-center
                     ${light ? "bg-grey text-black" : "bg-darkbg text-white"}`}>

        <div className={"flex flex-col md:flex-row items-center w-full px-4 min-h-[90vh] md:min-h-[79vh] justify-center gap-12 md:gap-40"}>
            <div className="flex flex-col justify-center gap-4">
                <h1 className="text-4xl font-bold mb-4 max-w-xs text-center tracking-wide hover:scale-105 transition-all">
                Welcome to Our <p className={`hover:scale-120  transition-all hover:tracking-normal  ${light ? "hover:text-pdark" : "hover:text-yellow-300"}`}>Blog App!</p></h1>
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
            <img src="/lovely-man.jpg" className={"h-[280px] md:h-[325px] hover:scale-105 transition-all"} alt=""/>
        </div>

        <div className={`flex flex-col-reverse md:flex-row min-h-[90vh] items-center justify-center w-full gap-12 md:gap-40 px-4 ${light ? "bg-offwhite" : "bg-darkg"}`}>
            <img src="/monkey.jpg" className={"h-[320px] md:h-[425px] hover:scale-105 transition-all"} alt=""/>
            <div className="text-lg text-center max-w-md md:max-w-xl hover:scale-105 transition-all">
                <h1 className={`text-4xl font-bold pb-8 ${light ? "hover:text-pdark" : "hover:text-primary"} hover:scale-115 transition-all`}>Who are we?</h1>
                <p>
                  The Bug Makers are a safe place to write, share, and explore posts.
                  Log in to access blogs or explore more about the project.
                </p>
            </div>
        </div>

        <div className={"flex flex-col md:flex-row items-center justify-center min-h-[90vh] gap-12 md:gap-40 mb-8 px-4"}>
            <div className={"flex flex-col hover:scale-110 transition-all text-center"}>
                <Link className={`text-4xl font-bold mb-4 w-full hover:scale-120 transition-all hover:underline hover:tracking-tight ${light ? "hover:text-pdark" : "hover:text-primary"}`} to="/contact">Contact Us!</Link>
                <p className={"w-full"}>We'd love a message from you, be it your thoughts of what to change, or a bug you've discovered.</p>
            </div>

            <img src="/chuz.jpg" className={"h-[280px] md:h-[325px] hover:scale-105 transition-all"} alt=""/>
        </div>
    </div>
  );
}
