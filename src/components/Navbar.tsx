import { FaBars } from "react-icons/fa";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-2 py-4 bg-gray-200">
        <button className="hover:cursor-pointer  lg:hidden">
          <FaBars className="text-2xl" />
        </button>
        <h1 className="text-2xl lg:text-3xl font-bold">
          Dashboard
        </h1>
        <div className="h-10 w-10 bg-gray-400 rounded-full">

        </div>
    </header>
  )
}
