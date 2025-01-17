"use client";

import React, { useState } from "react";
import Bracket from "./tournament-matches";
import { generateBracket } from "../../utils/tournament";
import { Slider } from "../ui/slider";
import { useIsMobile } from "@/hooks/use-mobile";
import { PencilRuler } from "lucide-react";

const bracketSizes = [2, 4, 8, 16, 32];

export const TournamentBracket: React.FC = () => {
  const [bracketSize, setBracketSize] = useState(8);
const isMobile = useIsMobile()
  const matches = generateBracket(bracketSize);

  const handleSliderChange = (value: number[]) => {
    const newValue = value[0];
    const sizeIndex = Math.round(newValue * (bracketSizes.length - 1));
    setBracketSize(bracketSizes[sizeIndex]);
  };

  const sliderValue =
    bracketSizes.findIndex((size) => size === bracketSize) /
    (bracketSizes.length - 1);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Draws</h1>
      <div className="mb-1 justify-start flex">
        <div className="flex items-center justify-between mb-2">
        </div>

     {!isMobile ? <div className="relative justify-between mx-auto bg-white rounded-lg p-4">
          <p className="mb-4">Bracket size</p>
  <Slider
    value={[sliderValue]}
    step={1 / (bracketSizes.length - 1)}
    onValueChange={handleSliderChange}
    min={0}
    max={1}
    className="w-[620px] w-full mx-auto "
  />
  <div className="flex justify-between text-sm mt-2 w-[620px] mx-auto  w-full">
    {bracketSizes.map((size) => (
      <span key={size} className="ml-3">
        {size}
      </span>
    ))}
  </div>
</div> : <div className="flex"><PencilRuler className=""/> </div> }

      </div>
      <Bracket matches={matches} />
    </div>
  );
};
