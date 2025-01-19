"use client";

import { useState } from "react";
import {
  Settings,
  AlertCircle,
  Download,
  Printer,
  Share2,
  Flag,
  ChevronLeft,
  ChevronRight,
  MenuSquare,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const rightMenuItems = [
  { icon: <Settings className="h-6 w-6" />, label: "Settings" },
  { icon: <AlertCircle className="h-6 w-6" />, label: "Alerts" },
  { icon: <Download className="h-6 w-6" />, label: "Downloads" },
  { icon: <Printer className="h-6 w-6" />, label: "Print" },
  { icon: <Share2 className="h-6 w-6" />, label: "Share" },
  { icon: <Flag className="h-6 w-6" />, label: "Reports" },
];

export function RightMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleDesktopMenu = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const renderMenuItems = (isMobile: boolean) => (
    <div className={isMobile ? "p-4 space-y-4" : "p-1"}>
      {rightMenuItems.map(({ icon, label }, index) => (
        <div
          key={index}
          className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-300"
        >
          <div
            className={
              isOpen || isMobile ? "flex items-center gap-4" : "justify-center"
            }
          >
            {icon}
            {(isOpen || isMobile) && (
              <span className="font-medium">{label}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {isMobile && (
        <button
          className="p-2 text-black-500 hover:bg-gray-200 rounded-md"
          onClick={toggleMobileMenu}
        >
          <MenuSquare className="h-6 w-6" />
        </button>
      )}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <h2 className="text-lg font-semibold">Actions</h2>
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-200 rounded-md"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {renderMenuItems(true)}
        </div>
      )}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-40 bg-white transform transition-all duration-500 ease-in-out md:block hidden",
          isOpen ? "w-64" : "w-16"
        )}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-3 top-[72px] z-50 h-6 w-6 rounded-full border bg-background p-0 shadow-sm"
          onClick={toggleDesktopMenu}
        >
          {isOpen ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
        <div className="h-full border-l overflow-y-auto">
          <div className="h-16 border-b flex items-center justify-between px-4">
            <h2 className={cn("text-lg font-semibold", !isOpen && "hidden")}>
              Actions
            </h2>
          </div>
          {renderMenuItems(false)}
        </div>
      </div>
    </>
  );
}
