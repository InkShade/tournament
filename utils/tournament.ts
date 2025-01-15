export type Match = {
  id: string;
  nextMatchId: string | null;
  tournamentRoundText: string;
  startTime: string;
  state: string;
  participants: {
    id: string;
    resultText: string; 
    isWinner: boolean;
    status: string | null;
    name: string;
  }[];
};

const teamNames = [
  "Red Dragons", "Blue Sharks", "Golden Eagles", "Silver Wolves", "Iron Titans", "Black Panthers",
  "Green Giants", "White Tigers", "Crimson Hawks", "Amber Lions", "Emerald Snakes", "Sapphire Owls",
  "Bronze Bears", "Platinum Foxes", "Ruby Ravens", "Cobalt Dolphins",
  "Scarlet Cobras", "Azure Falcons", "Ivory Elephants", "Obsidian Wolves", "Fire Foxes", "Shadow Spiders",
  "Thunder Ravens", "Frost Tigers", "Glacier Panthers", "Amber Scorpions", "Moonlight Owls", "Solar Eagles",
  "Crimson Rhinos", "Electric Sharks", "Lunar Wolves", "Storm Bears"
];

function getUniqueScores(): [number, number] {
  const score1 = Math.floor(Math.random() * 15) + 1;
  let score2;
  do {
    score2 = Math.floor(Math.random() * 15) + 1;
  } while (score2 === score1);
  return [score1, score2];
}

const fixedScores: Record<string, [number, number]> = {}; // Переместите фиксированные очки в глобальную область

export function generateBracket(size: number): Match[] {
  const rounds = Math.log2(size);
  let matches: Match[] = [];
  let matchId = 0;
  let previousRoundWinners: { name: string }[] = teamNames.slice(0, size).map(name => ({ name }));

  for (let round = 0; round < rounds; round++) {
    const roundMatches = size / Math.pow(2, round + 1);
    const currentRoundWinners: { name: string }[] = [];

    for (let match = 0; match < roundMatches; match++) {
      matchId++;

      const participant1 = previousRoundWinners[match * 2] || {
        name: `Team ${matchId * 2 - 1}`,
      };
      const participant2 = previousRoundWinners[match * 2 + 1] || {
        name: `Team ${matchId * 2}`,
      };

      if (!fixedScores[matchId]) {
        fixedScores[matchId] = getUniqueScores();
      }

      const [score1, score2] = fixedScores[matchId];
      const isFirstWinner = score1 > score2;

      const winner = isFirstWinner ? participant1 : participant2;
      currentRoundWinners.push(winner);

      matches.push({
        id: matchId.toString(),
        nextMatchId: round < rounds - 1 ? Math.ceil(matchId / 2 + roundMatches).toString() : null,
        tournamentRoundText: `Round ${round + 1}`,
        startTime: "TBD",
        state: "SCHEDULED",
        participants: [
          {
            id: `p${matchId * 2 - 1}`,
            resultText: score1.toString(),
            isWinner: isFirstWinner,
            status: "PLAYED",
            name: participant1.name,
          },
          {
            id: `p${matchId * 2}`,
            resultText: score2.toString(),
            isWinner: !isFirstWinner,
            status: "PLAYED",
            name: participant2.name,
          },
        ],
      });
    }

    previousRoundWinners = currentRoundWinners;
  }

  return matches;
}