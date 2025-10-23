import { BlogBox } from "./components/BlogBox/BlogBox"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"


function App() {

  return (
    <>
    <Header />
    <div className="w-full h-full p-4 bg-grey flex flex-row">
      <BlogBox title={"My First Blog!"} content={"I uh... I uh haven't done this before..."} author={"Joshua C. Price"} date={"10-22-2025"} initialComments={["He's pretty freaking goated", "This guy isn't human..."]}></BlogBox>
      <BlogBox title={"My Second Blog!"} content={"Don't listen to Josh... He has done this before..."} author={"Cailean M. Matthews."} date={"10-23-2025"} initialComments={["He's the smartest guy i've ever met", "Don't mess with him... his eyes turn red when he's mad..."]}></BlogBox>
    </div>
    <Footer />
    </>
  )
}

export default App
