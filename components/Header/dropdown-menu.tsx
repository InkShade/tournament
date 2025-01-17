import { useState } from "react";
import { PlusCircle } from "lucide-react";

export function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="ml-2 h-6 w-6 flex items-center justify-center text-gray-600">
        <PlusCircle />
      </button>
      {isMenuOpen && (
        <div className="absolute mt-5 top-3 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          <div className="flex flex-col space-y-2 p-2">
            <button className="bg-red-600 cursor-pointer rounded-md hover:bg-red-700 text-white px-4 py-2 text-center">
              Create
            </button>
            <button className="bg-gray-600 cursor-pointer rounded-md hover:bg-gray-700 text-white px-4 py-2 text-center">
              Pricing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
