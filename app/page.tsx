import { TournamentHeader } from "@/components/tournament-header"
import { TournamentInfo } from "@/components/tournament-info"
import { TournamentBracket } from "@/components/tournament-bracket"
import { SideMenu } from "@/components/side-menu"
import { RightMenu } from "@/components/right-menu"

export default function TournamentPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideMenu />
      <div className="flex-1 flex flex-col ml-16 lg:ml-64">
        <TournamentHeader />
        <TournamentInfo />
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-x-auto">
            <div className="min-w-[1200px] w-full max-w-full py-6 px-4">
              <div className="mb-6 flex items-center space-x-4 border-b pb-4 overflow-x-auto">
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
                  General
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
                  Participants
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
                  Groups
                </button>
                <button className="border-b-2 border-primary px-4 py-2 text-sm font-medium text-primary whitespace-nowrap">
                  Draws
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
                  Order of Play
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
                  Results
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
                  Statistics
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
                  Media
                </button>
              </div>
              <TournamentBracket />
            </div>
          </div>
          <div className="hidden lg:block">
            <RightMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

