
import logo from "../../assets/BugMakersLogo.png"


export default function Header() {

  return (
    <>
    <header className="w-full h-fit bg-black text-neutral flex justify-between p-4 items-center">
        <div>
            <img className="w-[150px]" src={logo} alt="bug makers logo" />
        </div>
        <nav className="flex gap-2">
            <a className="m-1 hover:text-primary" href="">Home</a>
            <a className="m-1 hover:text-primary" href="">About</a>
            <a className="m-1 hover:text-primary" href="">Contact</a>
        </nav>
    </header>
    </>
  )
}