import { useState } from "react";
import { useToggle } from "../context/toggleThemeContext";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const {light} = useToggle()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (not actually sent).");
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 h-[79vh]`}>
      <h1 className={`text-3xl font-bold mb-4 ${light ? "" : "text-primary"}`}>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-4 w-full max-w-md p-6 rounded-lg shadow-md ${light ? "bg-white" : "bg-darkg"}`}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`border p-2 rounded ${light ? "border-gray-300" : "border-primary text-neutral"}`}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={`border p-2 rounded ${light ? "border-gray-300" : "border-primary text-neutral"}`}
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={`border p-2 rounded h-24 ${light ? "border-gray-300" : "border-primary text-neutral"}`}
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={`m-auto h-10 bg-pdark w-[50%] rounded-2xl hover:scale-110 transition-all mb-1 ${light ? "text-white" : "bg-primary text-black"}`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
