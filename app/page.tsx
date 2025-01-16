"use client";
import { TournamentHeader } from "@/components/tournament-header";
import { TournamentInfo } from "@/components/tournament-info";
import { TournamentBracket } from "@/components/tournament-bracket";
import { SideMenu } from "@/components/side-menu";
import { RightMenu } from "@/components/right-menu";
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function TournamentPage() {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();


  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">
        <TournamentHeader />
        <div className=" mx-auto w-full px-4">
          <TournamentInfo />
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 flex flex-col">
              <div className="mb-6 flex items-center space-x-4 border-b pb-4 overflow-x-auto mx-auto">
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
            <div>
              {/* <RightMenu /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}