import { BlogBox } from "./components/BlogBox/BlogBox"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"


function App() {

  return (
    <>
    <Header />
    <div className="w-full h-full p-4 bg-grey">
      <BlogBox title={"My First Blog!"} content={"I uh... I uh haven't done this before..."} author={"Joshua C. Price"} date={"10-22-2025"}></BlogBox>
    </div>
    <Footer />
    </>
  )
}

export default App
