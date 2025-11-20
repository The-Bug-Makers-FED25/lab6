import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";
import { useToggle } from "./context/toggleThemeContext";
import { useAuth } from "./context/authContext";
import HomePage from "./pages/HomePage";

function App() {
  const {light} = useToggle()
  const {username} = useAuth()

  return (
    <>
      <Header />
      <main className={`overflow-auto min-h-[75vh] ${light ? "bg-grey" : "bg-darkbg"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login"element={!username ? <LoginPage /> : <Navigate to="/posts" replace />}
/>
          <Route path="/posts" element={<BlogPostsPage />} />
          <Route path="/posts/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </> 
    );
}

export default App;
