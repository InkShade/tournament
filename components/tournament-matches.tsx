import React from 'react';
import { Match } from '../utils/tournament';

interface BracketProps {
  matches: Match[];
}

const Bracket: React.FC<BracketProps> = ({ matches }) => {
  const rounds = Math.log2(matches.length + 1);

  return (
    <div className="flex overflow-x-auto p-4">
      {Array.from({ length: rounds }, (_, roundIndex) => (
        <div key={roundIndex} className="flex flex-col justify-around mr-4">
          {matches
            .filter((match) => match.tournamentRoundText === `Round ${roundIndex + 1}`)
            .map((match) => (
              <div key={match.id} className="mb-4 bg-white rounded-lg shadow-md p-2 w-48">
                <div className="text-xs text-gray-500 mb-1">{match.tournamentRoundText}</div>
                {match.participants.map((participant, index) => (
                  <div
                    key={participant.id}
                    className={`flex justify-between items-center p-1 ${
                      index === 0 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <span className="text-sm font-medium">{participant.name}</span>
                    <span className="text-xs text-gray-500">{participant.resultText || '-'}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Bracket;

