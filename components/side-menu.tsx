"use client"

import { useState } from 'react'
import { BarChart2, Home, Trophy, Users, UserCheck, Building2, Network, Newspaper, Plus, Menu, ChevronLeft } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  hasAddButton?: boolean
}

function MenuItem({ icon, label, isActive, hasAddButton }: MenuItemProps) {
  return (
    <div className={cn(
      "flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer",
      isActive && "bg-red-50 text-red-600 hover:bg-red-50"
    )}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      {hasAddButton && (
        <button className="p-1 hover:bg-gray-200 rounded">
          <Plus className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export function SideMenu() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-40 bg-white transform transition-all duration-500 ease-in-out",
      isOpen ? "w-64" : "w-16"
    )}>
      <div className="h-full border-r overflow-y-auto">
        <div className="h-16 border-b flex items-center justify-between px-4">
          <h2 className={cn("text-lg font-semibold", !isOpen && "hidden")}>Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <div className="p-4 space-y-1">
          <MenuItem icon={<BarChart2 className="h-5 w-5" />} label={isOpen ? "Dashboard" : ""} />
          <MenuItem icon={<Home className="h-5 w-5" />} label={isOpen ? "Home" : ""} isActive />
          <MenuItem icon={<Network className="h-5 w-5" />} label={isOpen ? "Leagues" : ""} hasAddButton={isOpen} />
          <MenuItem icon={<Trophy className="h-5 w-5" />} label={isOpen ? "Tournaments" : ""} hasAddButton={isOpen} />
          <MenuItem icon={<Users className="h-5 w-5" />} label={isOpen ? "Athletes" : ""} hasAddButton={isOpen} />
          <MenuItem icon={<UserCheck className="h-5 w-5" />} label={isOpen ? "Teams" : ""} hasAddButton={isOpen} />
          <MenuItem icon={<Users className="h-5 w-5" />} label={isOpen ? "Coaches" : ""} />
          <MenuItem icon={<Building2 className="h-5 w-5" />} label={isOpen ? "Clubs" : ""} />
          <MenuItem icon={<Network className="h-5 w-5" />} label={isOpen ? "Federations" : ""} />
          <MenuItem icon={<Newspaper className="h-5 w-5" />} label={isOpen ? "News" : ""} />
        </div>
      </div>
    </div>
  )
}

