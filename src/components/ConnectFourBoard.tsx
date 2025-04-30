import React from "react";

type Cell = "R" | "Y" | null;

interface ConnectFourBoardProps {
  board: Cell[][];
  onDrop: (col: number) => void;
  lastMove: { row: number; col: number } | null;
  animating: boolean;
  winningCells: { row: number; col: number }[] | null;
}

const ConnectFourBoard: React.FC<ConnectFourBoardProps> = ({ board, onDrop, lastMove, animating, winningCells }) => {
  return (
    <div className="bg-blue-800 p-4 rounded-xl shadow-lg ring-4 ring-blue-900">
      <div className="grid grid-rows-6 gap-1">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 gap-1">
            {row.map((cell, colIndex) => {
              const isLatest = lastMove?.row === rowIndex && lastMove?.col === colIndex;
              const dropAnimation = isLatest && animating ? `animate-drop-row-${rowIndex}` : "";
              const isWinningCell = winningCells?.some(
                (cell) => cell.row === rowIndex && cell.col === colIndex
              );
              
              return (
                <div
                  key={colIndex}
                  onClick={() => onDrop(colIndex)}
                  className="w-12 h-12
                    rounded-full
                    border-2
                    border-blue-950 bg-blue-100 flex items-center justify-center cursor-pointer hover:brightness-110 transition"
                >
                    {cell ? (
                          <div
                          className={`w-10 h-10 rounded-full ${dropAnimation}
                            ${cell === "R"
                              ? "bg-[radial-gradient(circle_at_50%_50%,#f87171_40%,#7f1d1d_95%)] shadow-inner shadow-red-900/65"
                              : "bg-[radial-gradient(circle_at_50%_50%,#fde047_40%,#78350f_95%)] shadow-inner shadow-yellow-900/60"
                            }
                            ${isWinningCell ? "ring-4 ring-green-400 animate-pulse" : ""}
                          `}
                        />                        
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100" />
                        )}

                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectFourBoard;
