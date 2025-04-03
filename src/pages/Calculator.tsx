import React, { useState, useRef, useEffect } from "react";
import CalculatorButton from "../components/CalculatorButton";
import { calculatorButtonSpecs } from "../utils/CalculatorButtons";
import { evaluateExpression } from "../utils/CalculatorUtils";

const Calculator = () => {
  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setInput("0");
    } else if (value === "←") {
      setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (value === "=") {
      setInput(evaluateExpression(input));
    } else {
      setInput((prev) => {
        if (prev === "0" && !["+", "-", "*", "/", "%", "."].includes(value)) {
          return value;
        }
        return prev + value;
      });
    }
  };

  const [input, setInput] = useState("0");

  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollLeft = displayRef.current.scrollWidth;
    }
  }, [input]);


  return (
    <div className="h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm space-y-4">
      <div
        ref={displayRef}
        className="bg-gray-100 p-4 rounded text-right text-2xl font-mono min-h-[48px] overflow-x-auto whitespace-nowrap"
      >
        {input}
      </div>

        
        <div className="grid grid-cols-4 gap-3">
          {calculatorButtonSpecs.map((btn, i) => (
            <CalculatorButton
              key={i}
              label={btn.label}
              onClick={() => handleButtonClick(btn.label)}
              className={
                btn.label === "0"
                  ? "col-span-2"
                  : btn.type === "evaluate"
                  ? "bg-indigo-500 text-white"
                  : btn.label === "C"
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
