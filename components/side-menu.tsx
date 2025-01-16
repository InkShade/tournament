"use client";

import { useState } from "react";
import {
  BarChart2,
  Home,
  Trophy,
  Users,
  UserCheck,
  Building2,
  Network,
  Newspaper,
  Plus,
  ChevronLeft,
  ChevronRight,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasAddButton?: boolean;
  isOpen: boolean;
}

function MenuItem({ icon, label, isActive, hasAddButton, isOpen }: MenuItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer",
        isActive && "bg-red-50 text-red-600 hover:bg-red-100",
        "transition-all duration-300"
      )}
    >
      <div className={isOpen ? "flex items-center gap-4" : "flex items-center justify-center"}>
        {icon}
        {isOpen && <span className="font-medium">{label}</span>}
      </div>
      {hasAddButton && isOpen && (
        <button className="p-1 hover:bg-gray-200 rounded">
          <Plus className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}

export function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDesktopMenu = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <button
        className="p-2 text-gray-700 hover:bg-gray-200 rounded-md md:hidden fixed top-4 left-4 z-50"
        onClick={toggleMobileMenu}
      >
        <MenuIcon className="h-6 w-6" />
        <span className="ml-2">Menu</span>
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={toggleMobileMenu} className="p-2 hover:bg-gray-200 rounded-md">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            <MenuItem icon={<BarChart2 className="h-6 w-6" />} label="Dashboard" isOpen />
            <MenuItem icon={<Home className="h-6 w-6" />} label="Home" isActive isOpen />
            <MenuItem icon={<Network className="h-6 w-6" />} label="Leagues" hasAddButton isOpen />
            <MenuItem icon={<Trophy className="h-6 w-6" />} label="Tournaments" hasAddButton isOpen />
            <MenuItem icon={<Users className="h-6 w-6" />} label="Athletes" hasAddButton isOpen />
            <MenuItem icon={<UserCheck className="h-6 w-6" />} label="Teams" isOpen />
            <MenuItem icon={<Users className="h-6 w-6" />} label="Coaches" isOpen />
            <MenuItem icon={<Building2 className="h-6 w-6" />} label="Clubs" isOpen />
            <MenuItem icon={<Network className="h-6 w-6" />} label="Federations" isOpen />
            <MenuItem icon={<Newspaper className="h-6 w-6" />} label="News" isOpen />
          </div>
        </div>
      )}

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 bg-white transform transition-all duration-500 ease-in-out md:block hidden",
          isOpen ? "w-64" : "w-16"
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-[72px] z-50 h-6 w-6 rounded-full border bg-background p-0 shadow-sm"
          onClick={toggleDesktopMenu}
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
        <div className="h-full border-r overflow-y-auto">
          <div className="h-16 border-b flex items-center justify-between px-4">
            <h2 className={cn("text-lg font-semibold", !isOpen && "hidden")}>Menu</h2>
          </div>
          <div className="p-1">
            <MenuItem icon={<BarChart2 className="h-6 w-6" />} label="Dashboard" isOpen={isOpen} />
            <MenuItem icon={<Home className="h-6 w-6" />} label="Home" isActive isOpen={isOpen} />
            <MenuItem icon={<Network className="h-6 w-6" />} label="Leagues" hasAddButton={isOpen} isOpen={isOpen} />
            <MenuItem icon={<Trophy className="h-6 w-6" />} label="Tournaments" hasAddButton={isOpen} isOpen={isOpen} />
            <MenuItem icon={<Users className="h-6 w-6" />} label="Athletes" hasAddButton={isOpen} isOpen={isOpen} />
            <MenuItem icon={<UserCheck className="h-6 w-6" />} label="Teams" isOpen={isOpen} />
            <MenuItem icon={<Users className="h-6 w-6" />} label="Coaches" isOpen={isOpen} />
            <MenuItem icon={<Building2 className="h-6 w-6" />} label="Clubs" isOpen={isOpen} />
            <MenuItem icon={<Network className="h-6 w-6" />} label="Federations" isOpen={isOpen} />
            <MenuItem icon={<Newspaper className="h-6 w-6" />} label="News" isOpen={isOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
