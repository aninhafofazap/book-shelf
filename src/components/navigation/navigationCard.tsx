// Componente de card de navegação
import { ImBooks } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import Sidebar from "./sideBarMenu";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-black text-white">
        <div className="flex items-center space-x-2">
          <ImBooks size={24} />
          <h1 className="text-xl font-bold">Estante de Livros</h1>
        </div>

        <div>
          <button onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
