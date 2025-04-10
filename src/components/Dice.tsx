// src/components/Dice.tsx
import React from "react";
import { DiceModel } from "../models/DiceModel";

type DiceProps = {
  dice: DiceModel;
};

const Dice = ({ dice }: DiceProps) => {
  return (
    <div className="w-20 h-20 flex items-center justify-center border-2 border-gray-500 rounded-lg text-4xl bg-white shadow-md">
      {dice.face}
    </div>
  );
};

export default Dice;
