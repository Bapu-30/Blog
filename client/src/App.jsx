import Featured from "./components/Featured"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import './App.css'
import NewPost from "./components/NewPost"

const App = () => {
  return (
    // <div className="container">
    //   <Sidebar />
    //   <div className="content">
    //     <div className="feat-bg">
    //       <Featured />
    //     </div>
    //     <Main />
    //   </div>
    // </div>
    <NewPost />
  )
}
export default App