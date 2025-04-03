import React, { useState, useRef, useEffect } from "react";
import CalculatorButton from "../components/CalculatorButton";
import { calculatorButtonSpecs } from "../utils/CalculatorButtons";
import { evaluateExpression } from "../utils/CalculatorUtils";

const Calculator = () => {
  const isOperator = (char: string) => ["+", "-", "*", "/", "%"].includes(char);

const handleButtonClick = (value: string) => {
  if (value === "C") {
    setInput("0");
  } else if (value === "←") {
    setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  } else if (value === "=") {
    setInput(evaluateExpression(input));
  } else {
    setInput((prev) => {
      const lastChar = prev.slice(-1);

      if (isOperator(lastChar) && isOperator(value)) {
        return prev;
      }

      if (prev === "0" && isOperator(value) && value !== "-") {
        return prev;
      }

      if (value === ".") {
        const lastSegment = prev.split(/[\+\-\*\/%]/).pop() || "";
        if (lastSegment.includes(".")) return prev;
      }

      if (prev === "0" && !isOperator(value) && value !== ".") {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
  
      if (/^[0-9]$/.test(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
        handleButtonClick(key);
      } else if (key === "Enter") {
        handleButtonClick("=");
      } else if (key === "Backspace") {
        handleButtonClick("←");
      } else if (key === "Escape") {
        handleButtonClick("C");
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);  

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
