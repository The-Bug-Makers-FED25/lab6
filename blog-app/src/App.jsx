import { BlogBox } from "./components/BlogBox/BlogBox"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"


function App() {

  return (
    <>
    <Header />
    <div className="w-full h-full p-4 bg-grey flex flex-row">
      <BlogBox title={"My First Blog!"} content={"I uh... I uh haven't done this before..."} author={"Joshua C. Price"} date={"10-22-2025"}></BlogBox>
      <BlogBox title={"My Second Blog!"} content={"Don't listen to Josh... He has done this before..."} author={"Cailean M. Matthews."} date={"10-23-2025"}></BlogBox>
    </div>
    <Footer />
    </>
  )
}

export default App
