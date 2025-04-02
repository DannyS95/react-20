import React, { useState } from "react";
import CalculatorButton from "../components/CalculatorButton";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const buttonValues = [
    "C", "←", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=",
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm space-y-4">
        <div className="bg-gray-100 p-4 rounded text-right text-2xl font-mono min-h-[48px]">
          {input}
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          {buttonValues.map((btn, i) => (
            <CalculatorButton
              key={i}
              label={btn}
              onClick={() => {}}
              className={
                btn === "0"
                  ? "col-span-2"
                  : btn === "="
                  ? "bg-indigo-500 text-white"
                  : btn === "C"
                  ? "bg-red-400 text-white"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
