import DemoFeatured from "./components/DemoFeatured"
import Featured from "./components/Featured"
import FeaturedSection from "./components/FeaturedSection"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
// import './App.css'
// import NewPost from "./components/NewPost"

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="md:max-w-[90%] md:mt-2 m-auto">
        <DemoFeatured />
      </main>

    </div>
  )
}
export default App