import {
  MapPin,
  MenuIcon,
  MoreVertical,
  PlusCircle,
  Search,
  User,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SideMenu } from "../Menu/side-menu";
import { RightMenu } from "../Menu/right-menu";
import { DropdownMenu } from "./dropdown-menu";
import { Button } from "../ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";

export function TournamentHeader() {
  const isMobile = useIsMobile();

  return (
    <header className="border-b h-14 px-4 sm:px-6">
      <div className="w-full mx-auto flex justify-between items-center py-2 space-x-6">
        {isMobile ? (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <SideMenu />
            </div>
            <div className="flex justify-center flex-1">
              <div className="relative flex items-center">
                <Search className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="max-w-[200px] w-full rounded-md border border-gray-300 pl-8 pr-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <DropdownMenu />
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 text-black-500 hover:bg-gray-200 rounded-md cursor-pointer">
                <User className="h-6 w-6 text-black-600" />
              </div>
              <RightMenu />
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 ml-20">
                <img
                  src="/logo.svg?height=100&width=100"
                  alt="Tournament Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <p className="text-sm">Latvia</p>
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
            <div className="flex space-x-4">
              <div className="flex items-center space-x-4 mr-20">
                <Button variant="destructive" className="hover:scale-105 transition-transform duration-300">
                  Create
                </Button>
                <Button className="shadow hover:scale-105 transition-transform duration-300" variant="secondary">
                  Pricing
                </Button>
                <Avatar className="cursor-pointer hover:scale-105 transition-transform duration-300">
                  <AvatarImage sizes="14px" src="https://www.svgrepo.com/show/91079/avatar.svg" alt="Avatar" />
                </Avatar>
              </div>
            </div>
          </>
        )}
      </div>
      {!isMobile && <SideMenu />}
      {!isMobile && <RightMenu />}
    </header>
  );
}
