export type Match = {
  id: string;
  nextMatchId: string | null;
  tournamentRoundText: string;
  startTime: string;
  state: string;
  participants: {
    id: string;
    resultText: string | null;
    isWinner: boolean;
    status: string | null;
    name: string;
  }[];
};

export function generateBracket(size: number): Match[] {
  const rounds = Math.log2(size);
  let matches: Match[] = [];
  let matchId = 0;

  for (let round = 0; round < rounds; round++) {
    const roundMatches = size / Math.pow(2, round + 1);
    for (let match = 0; match < roundMatches; match++) {
      matchId++;
      matches.push({
        id: matchId.toString(),
        nextMatchId: round < rounds - 1 ? Math.ceil(matchId / 2 + roundMatches).toString() : null,
        tournamentRoundText: `Round ${round + 1}`,
        startTime: "TBD",
        state: "SCHEDULED",
        participants: [
          {
            id: `p${matchId * 2 - 1}`,
            resultText: null,
            isWinner: false,
            status: null,
            name: `Player ${matchId * 2 - 1}`,
          },
          {
            id: `p${matchId * 2}`,
            resultText: null,
            isWinner: false,
            status: null,
            name: `Player ${matchId * 2}`,
          },
        ],
      });
    }
  }

  return matches;
}

