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
  Settings,
  AlertCircle,
  Download,
  Printer,
  Share2,
  Flag,
  Divide,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menuWidth = "64"; // Общая ширина для обеих панелей

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

export function RightMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={cn(
        "fixed inset-y-0 right-0 z-40 bg-white transform transition-all duration-500 ease-in-out",
        isOpen ? `w-${menuWidth}` : "w-16"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-3 top-[72px] z-50 h-6 w-6 rounded-full border bg-background p-0 shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
      <div className="h-full border-l overflow-y-auto">
        <div className="h-16 border-b flex items-center justify-between px-4">
          <h2 className={cn("text-lg font-semibold", !isOpen && "hidden")}>Actions</h2>
        </div>
        <div className="p-1">
          <MenuItem icon={<Download className="h-6 w-6" />} label="Download" isOpen={isOpen} />
          <MenuItem icon={<Share2 className="h-6 w-6" />} label="Share" isOpen={isOpen} />
          <MenuItem icon={<Printer  className="h-6 w-6" />} label="Print" isOpen={isOpen} />
          <MenuItem icon={<Flag  className="h-6 w-6" />} label="Report" isOpen={isOpen} />
          <MenuItem icon={<AlertCircle  className="h-6 w-6" />} label="Alerts" isOpen={isOpen} />
          <MenuItem icon={<Settings className="h-6 w-6" />} label="Settings" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}