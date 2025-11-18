import {useToggle} from "../context/toggleThemeContext.jsx";


export default function LoginPage(){
    const {light} = useToggle();

    return(
    <main className={`overflow-auto min-h-[75vh] flex p-12 justify-center`}>
            <div className="w-[60%] items-center bg-gray-950">
                <h1 className={`font-bold text-3xl text-center pt-8 ${light ? "text-pdark" : "text-primary"}`}>Welcome!</h1>
                <form action="" className={`${light ? "text-pdark" : "text-primary"} flex flex-col items-center gap-2 pt-8`}>
                    <label htmlFor="username">Enter your username:</label>
                    <input type="text" className={"border-2 w-60"}/>
                </form>
            </div>
        </main>
    )
}