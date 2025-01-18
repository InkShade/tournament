"use client";

import { TournamentHeader } from "@/components/Header/header";
import { TournamentInfo } from "@/components/Tournament/tournament-info";
import { TournamentBracket } from "@/components/Tournament/tournament-bracket";
import { TournamentMenu } from "@/components/Tournament/tournament-menu";
import { useEffect, useState } from "react";

export default function TournamentPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <TournamentHeader />
      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
        <TournamentInfo />
        <TournamentBracket />
      </main>
    </div>
  );
}