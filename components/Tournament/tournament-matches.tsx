import React, { useEffect, useState, useRef } from "react";
import { Match } from "../../utils/tournament";

interface GridProps {
  matches: Match[];
}

const TournamentGrid: React.FC<GridProps> = ({ matches }) => {
  const [clientMatches, setClientMatches] = useState(matches);
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);
  const bracketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setClientMatches(matches);
  }, [matches]);

  useEffect(() => {
    if (bracketRef.current) {
      const newLines: { x1: number; y1: number; x2: number; y2: number }[] = [];
      const matchElements = bracketRef.current.querySelectorAll("[data-match-id]");

      matchElements.forEach((el) => {
        const matchId = el.getAttribute("data-match-id");
        const match = clientMatches.find((m) => m.id === matchId);

        if (match && match.tournamentRoundText) {
          const currentRound = parseInt(match.tournamentRoundText.split(" ")[1]);
          const nextRound = currentRound + 1;

          const nextRoundMatches = clientMatches.filter((m) => parseInt(m.tournamentRoundText.split(" ")[1]) === nextRound);
          const currentRoundMatches = clientMatches.filter((m) => parseInt(m.tournamentRoundText.split(" ")[1]) === currentRound);

          if (nextRoundMatches.length > 0 && currentRoundMatches.length > 0) {
            const matchIndexInCurrentRound = currentRoundMatches.indexOf(match);
            const nextMatchIndex = Math.floor(matchIndexInCurrentRound / 2);

            const nextMatchEl = bracketRef.current!.querySelector(`[data-match-id="${nextRoundMatches[nextMatchIndex].id}"]`);

            if (nextMatchEl) {
              const rect1 = el.getBoundingClientRect();
              const rect2 = nextMatchEl.getBoundingClientRect();
              const bracketRect = bracketRef.current!.getBoundingClientRect();

              if (matchIndexInCurrentRound % 2 === 0) {
                const nextMatchEl2 = bracketRef.current!.querySelector(`[data-match-id="${currentRoundMatches[matchIndexInCurrentRound + 1].id}"]`);

                if (nextMatchEl2) {
                  const rect3 = nextMatchEl2.getBoundingClientRect();

                  newLines.push(
                    { x1: rect1.right - bracketRect.left, y1: rect1.top + rect1.height / 2 - bracketRect.top, x2: rect1.right - bracketRect.left + 20, y2: rect1.top + rect1.height / 2 - bracketRect.top },
                    { x1: rect3.right - bracketRect.left, y1: rect3.top + rect3.height / 2 - bracketRect.top, x2: rect3.right - bracketRect.left + 20, y2: rect3.top + rect3.height / 2 - bracketRect.top },
                    { x1: rect1.right - bracketRect.left + 20, y1: rect1.top + rect1.height / 2 - bracketRect.top, x2: rect1.right - bracketRect.left + 20, y2: rect3.top + rect3.height / 2 - bracketRect.top },
                    { x1: rect1.right - bracketRect.left + 20, y1: rect3.top + rect3.height / 2 - bracketRect.top - (rect3.top + rect3.height / 2 - rect1.top - rect1.height / 2) * 0.5, x2: rect2.left + rect2.width / 2 - bracketRect.left, y2: rect3.top + rect3.height / 2 - bracketRect.top - (rect3.top + rect3.height / 2 - rect1.top - rect1.height / 2) * 0.5 }
                  );
                }
              }
            }
          }
        }
      });

      setLines(newLines);
    }
  }, [clientMatches]);

  const rounds = Math.log2(clientMatches.length + 1);

  const getRoundName = (roundIndex: number, matchCount: number) => {
    const roundNames = ["Round 1", "Round 2", "QF", "SF", "Final"];
    return roundNames[roundIndex] || `R${Math.pow(2, rounds - roundIndex)}`;
  };

  return (
    <div ref={bracketRef} className="relative flex overflow-x-auto p-4 md:max-w-[768px] lg:max-w-none mx-auto whitespace-nowrap">
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {lines.map((line, index) => (
          <line key={index} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="#CBD5E0" strokeWidth="2" />
        ))}
      </svg>
      {Array.from({ length: rounds }, (_, roundIndex) => {
        const roundMatches = clientMatches.filter((match) => match.tournamentRoundText === `Round ${roundIndex + 1}`);
        const roundName = getRoundName(roundIndex, roundMatches.length);
        return (
          <div key={roundIndex} className="flex flex-col justify-around mr-8 relative">
            {roundMatches.map((match) => (
              <div key={match.id} data-match-id={match.id} className="relative mb-4 bg-white rounded-lg shadow-md p-4 w-52 border border-gray-200">
                <div className="text-sm text-gray-500 mb-2">{roundName}</div>
                {match.participants.map((participant, participantIndex) => (
                  <div key={participant.id} className={`flex justify-between items-center py-1 ${participantIndex === 0 ? "border-b border-gray-300" : ""}`}>
                    <span className={`text-sm font-medium ${participant.isWinner ? "text-orange-600" : "text-gray-700"}`}>{participant.name}</span>
                    <span className={`text-xs text-gray-500 ${participant.isWinner ? "text-orange-600" : "text-gray-500"}`}>{participant.resultText || "-"}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default TournamentGrid;