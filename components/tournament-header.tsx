import { MenuIcon, MoreVertical, PlusCircle, Search, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SideMenu } from "./side-menu";
import { RightMenu } from "./right-menu";
import { useState } from "react";

export function TournamentHeader() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);



  return (
    <header className="border-b">
      <div className="max-w-[1400px] mx-auto w-full flex items-center px-4 py-2">
      {isMobile ?(
    <div className="w-full flex items-center">
      <div className="flex items-center">
        <SideMenu />
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative flex items-center">
          <Search className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            className="max-w-[200px] w-full rounded-md border border-gray-300 pl-8 pr-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={toggleMenu}
            className="ml-2 h-6 w-6 flex items-center justify-center text-gray-600"
          >
            <PlusCircle />
          </button>
          {isMenuOpen && (
                <div className="absolute mt-5 top-3 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                  <div className="flex flex-col space-y-2 p-2">
                    <div className="bg-red-600 cursor-pointer rounded-md hover:bg-red-700 text-white px-4 py-2 text-center">
                      Create
                    </div>
                    <div className="bg-gray-600 cursor-pointer rounded-md hover:bg-gray-700 text-white px-4 py-2 text-center">
                      Pricing
                    </div>
                  </div>
                </div>
              )}
        </div>
      </div>

      <div className="flex items-center">
        <User className="h-6 w-6 text-black-600" />
      </div>

      <div className="flex items-center">
        <RightMenu />
      </div>
    </div>
  ) : (
          <>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8">
                <img
                  src="https://icon-library.com/images/image-icon-png/image-icon-png-6.jpg"
                  alt="Tournament Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <span>Latvia</span>
              </div>
            </div>
            <div className="flex-1 max-w-xl px-4">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-md border border-gray-300 pl-8 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                Create
              </div>
              <div className="border border-gray-300 px-4 py-2 rounded">
                Pricing
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-200" />
            </div>
          </>
        )}
      </div>
      {!isMobile && <SideMenu />}
      {!isMobile && <RightMenu />}
    </header>
  );
}
