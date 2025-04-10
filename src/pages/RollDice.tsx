// src/pages/RollDice.tsx
import React, { useState } from "react";
import Dice from "../components/Dice";
import { createDice, DiceModel } from "../models/DiceModel";

const RollDice = () => {
  const [dice1, setDice1] = useState<DiceModel>(createDice(1));
  const [dice2, setDice2] = useState<DiceModel>(createDice(1));

  const rollDice = () => {
    const new1 = Math.ceil(Math.random() * 6);
    const new2 = Math.ceil(Math.random() * 6);
    setDice1(createDice(new1));
    setDice2(createDice(new2));
  };


  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center gap-8">
      <div className="flex gap-6">
        <Dice dice={dice1} />
        <Dice dice={dice2} />
      </div>
      <p className="text-xl font-semibold">Total: {dice1.value + dice2.value}</p>

      <button
        onClick={rollDice}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Roll Dice
      </button>
    </div>
  );
};

export default RollDice;
