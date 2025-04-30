import React, { useState } from "react";
import ConnectFourBoard from "../components/ConnectFourBoard";
import { checkWinner } from "../services/connectAllFourService";

const ROWS = 6;
const COLS = 7;

type Cell = "R" | "Y" | null;

const ConnectFour = () => {
  const [board, setBoard] = useState<Cell[][]>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(null))
  );

  const [lastMove, setLastMove] = useState<{ row: number; col: number } | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<"R" | "Y">("R");
  const [animating, setAnimating] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [winner, setWinner] = useState<"R" | "Y" | null>(null);
  const [winningCells, setWinningCells] = useState<{ row: number; col: number }[] | null>(null);

  const resetGame = () => {
    setBoard(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
    setCurrentPlayer("R");
    setWinner(null);
    setWinningCells(null);
    setLastMove(null);
  };
  
  
  const handleDrop = (col: number) => {
    if (isLocked || winner) return;
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row][col] === null) {
        const newBoard = board.map((r) => [...r]);
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        setLastMove({ row, col });
        setAnimating(true);
        setIsLocked(true);

        setTimeout(() => {
          const result = checkWinner(newBoard, row, col, currentPlayer);

          if (result) {
            setWinner(result.winner);
            setWinningCells(result.winningCells);
          }
        
          setAnimating(false);
          setIsLocked(false);
        
          if (!result) {
            setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
          }
        }, 300);
        

        setTimeout(() => {
          setAnimating(false);
          setIsLocked(false);
          setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
        }, 250);

        return;
      }
    }

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-yellow-50">
      {!winner ? (
        <div className="text-xl font-semibold text-gray-800 mb-2">
          {currentPlayer === "R" ? "🔴 Red's Turn" : "🟡 Yellow's Turn"}
        </div>
      ) : (
        <div className="text-3xl font-bold text-green-600 mb-4">
          {winner === "R" ? "🔴 Red Wins!" : "🟡 Yellow Wins!"}
        </div>
      ) }

      <ConnectFourBoard
        board={board}
        onDrop={handleDrop}
        lastMove={lastMove}
        animating={animating}
        winningCells={winningCells}
      />

      {winner && (
        <button
          onClick={resetGame}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Play Again
        </button>
      )}
    </div>
  );
  
};

export default ConnectFour;
