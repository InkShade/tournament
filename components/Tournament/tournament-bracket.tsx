"use client";

import React, { useState } from "react";
import Bracket from "./tournament-matches";
import { generateBracket } from "../../utils/tournament";
import { Slider } from "../ui/slider";
import { useIsMobile } from "@/hooks/use-mobile";
import { PencilRuler, X } from "lucide-react";
import { TournamentMenu } from "./tournament-menu";

const bracketSizes = [2, 4, 8, 16, 32];

export const TournamentBracket: React.FC = () => {
  const [bracketSize, setBracketSize] = useState(8);
  const [showSliderModal, setShowSliderModal] = useState(false); // State for controlling modal visibility
  const isMobile = useIsMobile();
  const matches = generateBracket(bracketSize);

  const handleSliderChange = (value: number[]) => {
    const newValue = value[0];
    const sizeIndex = Math.round(newValue * (bracketSizes.length - 1));
    setBracketSize(bracketSizes[sizeIndex]);
  };

  const sliderValue =
    bracketSizes.findIndex((size) => size === bracketSize) / 
    (bracketSizes.length - 1);

  const toggleSliderModal = () => {
    setShowSliderModal(!showSliderModal);
  };

  return (
    <div className={isMobile ? "container mx-auto px-4 py-8" : "container mx-auto px-4"}>
      <div className="flex flex-col md:flex-row">
        {isMobile && (
          <div className="flex items-center mb-6">
            <h1 className="text-2xl font-bold">Draws</h1>
            <PencilRuler
              className="mt-1 ml-2 cursor-pointer rounded-lg"
              onClick={toggleSliderModal}
            />
            <TournamentMenu />
          </div>
        )}

        {!isMobile && (
          <div className="w-full">
            <TournamentMenu />
          </div>
        )}
      </div>

      <div className="mb-1 justify-start flex">
        <div className="flex items-center justify-between mb-2"></div>

        {!isMobile && (
          <div className="relative justify-between mx-auto bg-white rounded-lg p-4">
            <p className="mb-4">Bracket size</p>
            <Slider
              value={[sliderValue]}
              step={1 / (bracketSizes.length - 1)}
              onValueChange={handleSliderChange}
              min={0}
              max={1}
              className="w-[640px] w-full mx-auto cursor-pointer"
            />
            <div className="flex justify-between text-sm mt-2 w-[640px] mx-auto w-full">
              {bracketSizes.map((size) => (
                <span key={size} className="ml-3">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <Bracket matches={matches} />
      
      {/* Modal window */}
      {isMobile && showSliderModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white rounded-lg p-4 max-w-md mx-auto">
              <p className="mb-4">Bracket size</p>
              <Slider
                value={[sliderValue]}
                step={1 / (bracketSizes.length - 1)}
                onValueChange={handleSliderChange}
                min={0}
                max={1}
                className="w-[300px] mx-auto"
              />
              <div className="flex justify-between text-sm mt-2">
                {bracketSizes.map((size) => (
                  <span key={size} className="ml-3">{size}</span>
                ))}
              </div>
              <button
                onClick={toggleSliderModal}
                className="absolute top-2 right-2 text-lg text-red-500"
              >
                <X className="hover:bg-gray-200 rounded-lg"/>
              </button>
            </div>
          </div>
        )}
    </div>
  );
};