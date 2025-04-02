import React from "react";

interface Props {
  label: string;
  onClick: () => void;
  className?: string;
}

const CalculatorButton = ({ label, onClick, className = "" }: Props) => (
  <button
    onClick={onClick}
    className={`bg-gray-200 hover:bg-gray-300 text-lg rounded p-4 font-bold ${className}`}
  >
    {label}
  </button>
);

export default CalculatorButton;
