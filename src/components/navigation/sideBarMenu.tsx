// Componente do menu lateral

import { IoMdClose } from "react-icons/io";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black text-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out w-64`}
    >
      <div className="p-4 flex justify-end">
        <button onClick={toggleSidebar}>
          <IoMdClose size={24} className="text-white" />
        </button>
      </div>

      <ul className="mt-4">
        <li className="py-2 border-b border-gray-700">teste</li>
        <li className="py-2 border-b border-gray-700">teste</li>
        <li className="py-2 border-b border-gray-700">teste</li>
      </ul>
    </div>
  );
}
