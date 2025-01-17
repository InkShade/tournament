import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function TournamentMenu() {
  return (
    <Menubar className="space-x-4 justify-center">
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer">
          General
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Overview</MenubarItem>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Settings</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer">
          Participants
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">View Participants</MenubarItem>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Add Participant</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer">
          Groups
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Group Standings</MenubarItem>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Edit Groups</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer">
          Draws
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">View Draws</MenubarItem>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Edit Draws</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer">
          Order of Play
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">View Schedule</MenubarItem>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Edit Schedule</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer">
          Results
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Match Results</MenubarItem>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Player Stats</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer">
          Statistics
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Player Performance</MenubarItem>
          <MenubarItem className="cursor-pointer hover:bg-gray-100">Team Rankings</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
