'use client'

import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider"
import Bracket from './tournament-matches';
import { generateBracket } from '../utils/tournament';

const bracketSizes = [2, 4, 8, 16, 32];

export const TournamentBracket: React.FC = () => {
  const [bracketSize, setBracketSize] = useState(8);
  const matches = generateBracket(bracketSize);

  const handleSliderChange = (value: number[]) => {
    setBracketSize(bracketSizes[value[0]]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tournament Bracket</h1>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="bracket-size" className="text-lg font-medium">
            Current Bracket Size - {bracketSize}
          </label>
        </div>
        <Slider
          id="bracket-size"
          min={0}
          max={4}
          step={1}
          value={[bracketSizes.indexOf(bracketSize)]}
          onValueChange={handleSliderChange}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-lg font-bold">
          {bracketSizes.map(size => (
            <span key={size}>{size}</span>
          ))}
        </div>
      </div>
      <Bracket matches={matches} />
    </div>
  );
};

