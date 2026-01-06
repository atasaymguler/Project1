import { useSelector } from "react-redux"
import Asidebar from "./components/Asidebar"
import Navbar from "./components/Navbar"
import type { RootState } from "./store/store"
import { useEffect } from "react"

function App() {

  const darkTheme = useSelector((state:RootState)=> state.app.darkTheme)
  useEffect(()=> {
    document.documentElement.classList.toggle("dark",darkTheme)
  },[darkTheme])
  return (
    <div className="flex ">
    <Asidebar />
     <Navbar />
    </div>
  )
}

export default App
