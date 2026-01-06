import { FaHome } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { CgDetailsLess } from "react-icons/cg";
import { IoIosContacts } from "react-icons/io";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
export default function Asidebar() {
  const asidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "Products",
      icon: <FaBoxes />,
    },
    {
      id: 3,
      name: "About Us",
      icon: <FaInfo />,
    },
    {
      id: 4,
      name: "Details",
      icon: <CgDetailsLess />,
    },
    {
      id: 5,
      name: "Contact",
      icon: <IoIosContacts />,
    },
  ];
  return (
    <aside className="bg-gray-100 h-screen w-64 py-3">
      <div className="flex justify-between items-center gap-3 mt-2 pb-4 px-5 border-b">
        <h1 className="text-3xl font-bold">Logo</h1>
        <button className="text-2xl lg:hidden font-bold hover:cursor-pointer">
          X
        </button>
      </div>
      <div className="flex flex-col mt-7 space-y-5 px-3">
        {asidebarItems.map((item) => (
          <div className="flex items-center gap-3 group hover:bg-gray-400 hover:cursor-pointer p-2 rounded-2xl">
            <p className="text-2xl "> {item.icon} </p>
            <p className="text-xl lg:text-2xl"> {item.name} </p>
          </div>
        ))}
        <div className="pl-2">
          <FaMoon className="theme-button" />
          <FaSun className="theme-button" />
        </div>
      </div>
    </aside>
  );
}
