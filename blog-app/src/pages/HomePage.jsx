import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useToggle } from "../context/toggleThemeContext";

export default function HomePage() {
  const { username } = useAuth();
  const { light } = useToggle();

  return (
    <div className={`min-h-[75vh] flex flex-col items-center justify-center px-4
                     ${light ? "bg-grey text-black" : "bg-darkbg text-white"}`}>
      
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog App</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        A safe place to write, share, and explore posts.  
        Log in to access blogs or explore more about the project.
      </p>

      <div className="flex gap-4">
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
  );
}
