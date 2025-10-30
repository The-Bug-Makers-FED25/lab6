import { useToggle } from "../../context/toggleThemeContext"

export default function Footer () {
    const {light} = useToggle()

    return (
    <footer className={`flex justify-center p-4 fixed min-w-full text-neutral bottom-0 ${light ? "bg-pdark" : "bg-black"  }`}>      
        <p>©2022 The Bug Makers. All rights reserved.</p>
    </footer>
    )
}