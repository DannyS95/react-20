import React from "react";

type Cell = "R" | "Y" | null;

interface ConnectFourBoardProps {
  board: Cell[][];
  onDrop: (col: number) => void;
}

const ConnectFourBoard: React.FC<ConnectFourBoardProps> = ({ board, onDrop }) => {

  return (
    <div className="bg-blue-800 p-4 rounded-xl shadow-lg ring-4 ring-blue-900">
      <div className="grid grid-rows-6 gap-1">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 gap-1">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                onClick={() => onDrop(colIndex)}
                className="w-12 h-12 rounded-full border-2 border-blue-950 bg-blue-100 flex items-center justify-center cursor-pointer hover:brightness-110 transition"
              >
                {cell ? (
                <div
                  className={`w-10 h-10 rounded-full transition-all duration-300
                    ${cell === "R"
                      ? "bg-[radial-gradient(circle_at_30%_30%,#f87171_30%,#b91c1c_90%)] shadow-inner shadow-red-900/60"
                      : "bg-[radial-gradient(circle_at_30%_30%,#fde047_30%,#b45309_90%)] shadow-inner shadow-yellow-900/50"
                    }
                  `}
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-blue-100" />
              )}


              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectFourBoard;
