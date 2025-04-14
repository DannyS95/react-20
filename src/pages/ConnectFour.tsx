import React, { useState } from "react";
import ConnectFourBoard from "../components/ConnectFourBoard";

const ROWS = 6;
const COLS = 7;

type Cell = "R" | "Y" | null;

const ConnectFour = () => {
  const [board, setBoard] = useState<Cell[][]>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(null))
  );

  const [currentPlayer, setCurrentPlayer] = useState<"R" | "Y">("R");

  const handleDrop = (col: number) => {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][col] === null) {
        const newBoard = board.map((r) => [...r]);
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
        return;
      }
    }

  };

  return (
    <div className="h-screen bg-yellow-50 flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">
        {currentPlayer === "R" ? "🔴 Red's Turn" : "🟡 Yellow's Turn"}
      </h2>

      <ConnectFourBoard board={board} onDrop={handleDrop} />
    </div>
  );
};

export default ConnectFour;
