"use client";

import React, { useState } from "react";
import { Slider } from "@nextui-org/react";
import Bracket from "./tournament-matches";
import { generateBracket } from "../../utils/tournament";

const bracketSizes = [2, 4, 8, 16, 32];

export const TournamentBracket: React.FC = () => {
  const [bracketSize, setBracketSize] = useState(8);

  const matches = generateBracket(bracketSize);

  const handleSliderChange = (value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value;
    const sizeIndex = Math.round(newValue * (bracketSizes.length - 1));
    setBracketSize(bracketSizes[sizeIndex]);
  };

  const marks = bracketSizes.map((size, index) => ({
    value: index / (bracketSizes.length - 1),
    label: `${size}`,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tournament Bracket</h1>
      <div className="">
        <div className="flex items-center justify-between mb-2">
        <label className="text-lg font-medium">Bracket Size</label>
        <span className="text-sm text-muted-foreground">{bracketSize} Players</span>
        </div>
        <Slider
          defaultValue={(bracketSizes.indexOf(8)) / (bracketSizes.length - 1)}
          marks={marks}
          maxValue={1}
          minValue={0}
          step={1 / (bracketSizes.length - 1)}
          onChange={handleSliderChange}
        />
      </div>
      <Bracket matches={matches} />
    </div>
  );
};