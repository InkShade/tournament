import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="p-2 ml-1 text-black-500 hover:bg-gray-200 rounded-md cursor-pointer">
      <div onClick={toggleMenu}>
        <PlusCircle />
      </div>
      {isMenuOpen && (
        <div className="absolute mt-5 right-1 top-5 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          <div className="flex flex-col space-y-2 p-2">
            <Button
              variant="destructive"
              className="hover:scale-105 transition-transform duration-300"
            >
              Create
            </Button>
            <Button
              variant="secondary"
              className="hover:scale-105 transition-transform duration-300"
            >
              Pricing
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
