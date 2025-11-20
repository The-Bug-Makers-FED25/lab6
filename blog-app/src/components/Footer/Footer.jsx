import { useToggle } from "../../context/toggleThemeContext"

export default function Footer () {
    const {light} = useToggle()

    return (
    <footer className={`flex justify-center items-center p-4 sticky min-w-full h-[10vh] text-neutral bottom-0 ${light ? "bg-pdark" : "bg-black"  }`}>
        <p>©2022 The Bug Makers. All rights reserved.</p>
    </footer>
    )
}