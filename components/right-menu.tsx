"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Download, Printer, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function RightMenu() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`fixed inset-y-0 right-0 z-40 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-12'}`}>
      <div className="relative h-full border-l bg-white">
        <Button
          variant="ghost"
          size="icon"
          className="absolute ml-0.5 top-4 z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
        {isOpen && (
          <div className="flex flex-col h-full">
            <div className="h-16 border-b flex items-center justify-center">
              <h2 className="text-lg font-semibold">Actions</h2>
            </div>
            <div className="p-4 space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}