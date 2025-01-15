import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function TournamentHeader() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bs0dnyLiYsXuHQOqGzqi3NZSDRc2Dg.png"
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
          <Button variant="default" className="bg-red-600 hover:bg-red-700">
            Create
          </Button>
          <Button variant="outline">Pricing</Button>
          <div className="h-8 w-8 rounded-full bg-gray-200" />
        </div>
      </div>
    </header>
  )
}

