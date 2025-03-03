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
import { useIsMobile } from "@/hooks/use-mobile";

const menuItems = [
  { icon: <BarChart2 className="h-6 w-6" />, label: "Dashboard" },
  { icon: <Home className="h-6 w-6" />, label: "Home", isActive: true },
  {
    icon: <Network className="h-6 w-6" />,
    label: "Leagues",
    hasAddButton: true,
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    label: "Tournaments",
    hasAddButton: true,
  },
  {
    icon: <Users className="h-6 w-6" />,
    label: "Athletes",
    hasAddButton: true,
  },
  { icon: <UserCheck className="h-6 w-6" />, label: "Teams" },
  { icon: <Users className="h-6 w-6" />, label: "Coaches" },
  { icon: <Building2 className="h-6 w-6" />, label: "Clubs" },
  { icon: <Network className="h-6 w-6" />, label: "Federations" },
  { icon: <Newspaper className="h-6 w-6" />, label: "News" },
];

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasAddButton?: boolean;
  isOpen: boolean;
}

function MenuItem({
  icon,
  label,
  isActive,
  hasAddButton,
  isOpen,
}: MenuItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer",
        isActive && "bg-red-50 text-red-600 hover:bg-red-100",
        "transition-all duration-300"
      )}
    >
      <div
        className={
          isOpen
            ? "flex items-center gap-4"
            : "flex items-center justify-center"
        }
      >
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const renderMenuItems = (isMobile: boolean) => (
    <div className={isMobile ? "p-4 space-y-4" : "p-1"}>
      {menuItems.map(({ icon, label, hasAddButton }, index) => (
        <MenuItem
          key={index}
          icon={icon}
          label={label}
          isActive={label === "Home"}
          hasAddButton={hasAddButton}
          isOpen={isMenuOpen}
        />
      ))}
    </div>
  );

  return (
    <>
      {isMobile && (
        <button
          className="flex items-center justify-between w-full p-2 hover:bg-gray-200 rounded-md mr-2"
          onClick={toggleMenu}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      )}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-200 rounded-md"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {renderMenuItems(true)}
        </div>
      )}
      {!isMobile && (
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-40 bg-white transform transition-all duration-500 ease-in-out md:block hidden",
            isMenuOpen ? "w-64" : "w-16"
          )}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-3 top-[72px] z-50 h-6 w-6 rounded-full border bg-background p-0 shadow-sm"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
          <div className="h-full border-r overflow-y-auto">
            <div className="h-16 border-b flex items-center justify-between px-4">
              <h2
                className={cn("text-lg font-semibold", !isMenuOpen && "hidden")}
              >
                Menu
              </h2>
            </div>
            {renderMenuItems(false)}
          </div>
        </div>
      )}
    </>
  );
}
