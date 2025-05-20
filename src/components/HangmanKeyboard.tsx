const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");

interface KeyboardProps {
  onKeyPress: (letter: string) => void;
  disabledKeys: string[];
  isDisabled: boolean;
}

const Keyboard = ({ onKeyPress, disabledKeys, isDisabled }: KeyboardProps) => {
  return (
    <div className="grid grid-cols-10 gap-2 max-w-xl">
      {KEYS.map((letter) => {
        const isUsed = disabledKeys.includes(letter);
        return (
          <button
            key={letter}
            onClick={() => onKeyPress(letter)}
            disabled={isUsed || isDisabled}
            className={`p-2 rounded text-white ${
              isUsed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
