import { useSelector } from "react-redux";
import Asidebar from "./components/Asidebar";
import type { RootState } from "./store/store";
import { useEffect } from "react";
import Main from "./components/Main";

function App() {
  const darkTheme = useSelector((state: RootState) => state.app.darkTheme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkTheme);
  }, [darkTheme]);
  return (
    <div className="flex h-screen bg-gray-white dark:bg-gray-900 transition-all duration-300" >
      <Asidebar />
     <Main />
    </div>
  );
}

export default App;
