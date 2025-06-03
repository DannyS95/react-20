import { useState } from "react";
import HangmanDrawing from "../components/HangmanDrawing";
import HangmanWord from "../components/HangmanWord";
import Keyboard from "../components/HangmanKeyboard";
import words from "../data/words.json";
import GameResult from "../components/HangmanResult";

// Optional Stretch Ideas (if revisiting later):
// - 🧠 Physical keyboard support (keydown listener for letter input)
// - 🎯 Word length / difficulty selector (easy, medium, hard)
// - 💡 Hint system (e.g. first letter reveal, letter frequency highlight)
// - ⏱️ Timer or challenge mode (beat the clock or limited guesses)
// - 🗂️ Category selector before game start (choose theme manually)


const MAX_GUESSES = 6;

type Category = keyof typeof words;

const getRandomWord = (category: Category = "animals") =>
  words[category][Math.floor(Math.random() * words[category].length)];

const Hangman = () => { 
  const category: Category = 'animals';
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isLoser = incorrectLetters.length >= MAX_GUESSES;

  const handleGuess = (letter: string) => {
    if (
      guessedLetters.includes(letter) ||
      isWinner ||
      isLoser
    ) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

  const resetGame = () => {
    setWordToGuess(getRandomWord(category));
    setGuessedLetters([]);
  };
  

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">🎯 Hangman</h1>
      <HangmanDrawing incorrectGuesses={incorrectLetters.length} />
      <p className="text-base text-gray-600 font-medium">(Category: {category})</p>
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        revealAll={isLoser}
      />
      <GameResult
        isWinner={isWinner}
        isLoser={isLoser}
        wordToGuess={wordToGuess}
        onReset={resetGame}
      />
      <Keyboard
        onKeyPress={handleGuess}
        disabledKeys={guessedLetters}
        isDisabled={isWinner || isLoser}
      />
    </div>
  );
};

export default Hangman;
