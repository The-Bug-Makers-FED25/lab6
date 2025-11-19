import { Link } from "react-router-dom";
import logo from "../../assets/BugMakersLogo.png"
import { useToggle } from "../../context/toggleThemeContext";
import { useAuth } from "../../context/authContext";


export default function Header() {
  const {light, toggle} = useToggle()
  const {username, logout} = useAuth()


  return (
    <>
    <header className={`w-full h-[15vh] bg-black text-neutral flex justify-between p-4 items-center ${light ? "bg-pdark" : ""}`}>
        <div>
            <img className="w-[150px]" src={logo} alt="bug makers logo" />
        </div>
        <nav className="flex gap-2">
            <Link className="m-1 hover:text-primary" to="/">Home</Link>
            {username ? <Link className="m-1 hover:text-primary" to="/posts">Blogs</Link> : <></>}
            <Link className="m-1 hover:text-primary" to="/contact">Contact</Link>
            <button className="m-1 hover:text-primary cursor-pointer border-none" onClick={toggle}>Toggle Theme</button>
            {username ? <button className="m-1 hover:text-primary cursor-pointer border-none" onClick={logout}>Logout</button> : <Link className="m-1 hover:text-primary" to="/login">Login</Link>}
        </nav>
    </header>
    </>
  )
}