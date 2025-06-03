interface GameResultProps {
  isWinner: boolean;
  isLoser: boolean;
  wordToGuess: string;
  onReset: () => void;
}

const GameResult = ({ isWinner, isLoser, wordToGuess, onReset }: GameResultProps) => {
  if (!isWinner && !isLoser) return null;

  return (
    <div
      className={`text-xl font-semibold flex flex-col items-center ${
        isWinner ? 'text-green-600' : 'text-red-600'
      }`}
    >
      <span className="mb-2">
        {isWinner
          ? '🎉 You won!'
          : `☠️ You lost — the word was: ${wordToGuess}`}
      </span>

      <button
        onClick={onReset}
        className="px-5 py-2 rounded text-lg bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        🔁 Play Again
      </button>

    </div>
  );
};

export default GameResult;
