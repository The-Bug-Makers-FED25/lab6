import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import ContactPage from "./pages/ContactPage";
import { useToggle } from "./context/toggleThemeContext";
import { useAuth } from "./context/authContext";

function App() {
  const {light} = useToggle()
  const {username} = useAuth()

  return (
    <>
      <Header />
      <main className={`overflow-auto min-h-[75vh] ${light ? "bg-grey" : "bg-darkbg"}`}>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/posts" element={username ? <BlogPostsPage /> : <Navigate to="/login" replace/>} />
          <Route path="/posts/:id" element={username ? <IndividualPostPage /> : <Navigate to="/login" replace/>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </> 
    );
}

export default App;
