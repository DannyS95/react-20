import { useState } from "react";
import HangmanDrawing from "../components/HangmanDrawing";
import HangmanWord from "../components/HangmanWord";
import Keyboard from "../components/HangmanKeyboard";
import words from "../data/words.json";

const MAX_GUESSES = 6;

type Category = keyof typeof words;

const getRandomWord = (category: Category = "animals") =>
  words[category][Math.floor(Math.random() * words[category].length)];

const Hangman = () => { 
  const [wordToGuess] = useState(getRandomWord());
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

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">🎯 Hangman</h1>
      <HangmanDrawing incorrectGuesses={incorrectLetters.length} />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        revealAll={isLoser}
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
