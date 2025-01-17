"use client";
import { TournamentHeader } from "@/components/Header/header";
import { TournamentInfo } from "@/components/Tournament/tournament-info";
import { TournamentBracket } from "@/components/Tournament/tournament-bracket";

import React, { useState, useEffect } from "react";
import { TournamentMenu } from "@/components/Tournament/tournament-menu";

export default function TournamentPage() {
  const [isClient, setIsClient] = useState(false);

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
        <div className="mx-auto w-full px-4 ">
          <TournamentInfo />
          <TournamentMenu />
          <TournamentBracket />
        </div>
      </div>
    </div>
  );
}
