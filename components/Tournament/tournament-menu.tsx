import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Home,
  Users,
  Layers,
  Shuffle,
  Clock,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const MenuItem = ({
  Icon,
  text,
  isActive,
  isMobile,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  isActive?: boolean;
  isMobile?: boolean;
}) => (
  <div
    className={`px-4 py-2 text-sm font-medium ${
      isActive && !isMobile
        ? "text-white bg-red-600 hover:text-red-600"
        : "text-gray-600"
    }`}
  >
    <Icon
      className={`mr-2 inline h-4 w-4 transition-transform duration-300 ${
        isActive && !isMobile ? "text-gray-600" : "text-black"
      }`}
    />
    {text}
  </div>
);

const IconWithText = ({
  Icon,
  text,
  isActive,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  isActive?: boolean;
}) => (
  <div
    className={`px-4 py-2 text-sm font-medium text-gray-600 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-200 ${
      isActive ? "text-white bg-red-600 hover:text-red-600" : "text-gray-600"
    }`}
  >
    <Icon
      className={`mr-2 inline h-4 w-4 transition-transform duration-300 ${
        isActive ? "text-white-600" : "text-black"
      }`}
    />
    {text}
  </div>
);

export function TournamentMenu() {
  const isMobile = useIsMobile();
  const menuItems = [
    { Icon: Home, text: "General" },
    { Icon: Users, text: "Participants" },
    { Icon: Layers, text: "Groups" },
    { Icon: Shuffle, text: "Draws", isActive: true },
    { Icon: Clock, text: "Order of Play" },
  ];

  return (
    <div className="md:sticky top-0 z-10 m-check">
      {isMobile ? (
        <div className="md:hidden flex items-center space-x-2 rounded-lg">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 text-gray-600">
              <MoreVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              {menuItems.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 rounded-full cursor-pointer transition-colors duration-300"
                >
                  <MenuItem Icon={item.Icon} text={item.text} />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="hidden md:block">
          <NavigationMenu className="flex justify-center items-center space-x-4 m-auto">
            <NavigationMenuList className="flex justify-center space-x-4">
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="p-2 rounded-full cursor-pointer transition-colors duration-300">
                    <IconWithText
                      Icon={item.Icon}
                      text={item.text}
                      isActive={item.isActive}
                    />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </div>
  );
}
