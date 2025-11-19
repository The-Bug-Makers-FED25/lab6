import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";
import {useToggle} from "../context/toggleThemeContext.jsx";
import { useState } from "react";



export default function LoginPage(){
    const {light} = useToggle();
    const {login, signup} = useAuth()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [loggingIn, setLoggingIn] = useState(true)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (loggingIn) {
            let res = login(formData.name, formData.password)

            if (res !== "logged in Ws in the chat") {
                setError(res)
                return
            }
        } else {
            let res = signup(formData.name, formData.password)
            if (res !== "registered Ws in the chat") {
                setError(res)
                return
            }
        }

        setFormData({
            name: "",
            password: "",
        })

        navigate("/posts")
    };

  return (
    <div className={`h-[75vh] flex flex-col items-center justify-center p-8`}>
      <h1 className={`text-3xl font-bold mb-4 ${light ? "" : "text-primary"}`}>
        {loggingIn ? "Login": "Register"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-4 w-full max-w-md p-6 rounded-lg shadow-md ${light ? "bg-white" : "bg-darkg"}`}
      >
        {error ? 
        <div className={`border p-2 m-auto w-full flex justify-between gap-1 rounded-md ${light ? "border-gray-300 text-black bg-white" : "border-primary text-neutral text-white bg-darkg"}`}>
          <p>{error}</p>
          <button onClick={() => setError(null)} className={`bg-none cursor-pointer hover:underline ${light ? "text-pdark" : "text-primary"}`}>✕</button>
        </div>: 
        <></>
        }
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`border p-2 rounded ${light ? "border-gray-300" : "border-primary text-neutral"}`}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          className={`border p-2 rounded ${light ? "border-gray-300" : "border-primary text-neutral"}`}
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={`cursor-pointer m-auto h-10 bg-pdark w-[50%] rounded-2xl hover:scale-110 transition-all mb-1 ${light ? "text-white" : "bg-primary text-black"} ${error ? "opacity-50" : ""}`}
          disabled={error} 
       >
          {loggingIn ? "Login" : "Signup"}  
        </button>
      </form>
        <button
            onClick={() => setLoggingIn(!loggingIn)}
            className= {`hover:underline mt-2 ${light ? "text-pdark" : "text-primary"} ${error ? "opacity-50" : ""}`}
            disabled={error}                
       >
            {loggingIn ? "Sign Up Instead?" : "Login Instead?"}
        </button>
    </div>
  );
}