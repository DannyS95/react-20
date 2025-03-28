// src/components/QuoteBox.tsx
import React from "react";

const QuoteBox = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-xl w-full">
      <p className="text-xl font-medium text-gray-800 mb-4">
        "The only limit to our realization of tomorrow is our doubts of today."
      </p>
      <p className="text-right text-sm text-gray-500">– Franklin D. Roosevelt</p>
    </div>
  );
};

export default QuoteBox;
