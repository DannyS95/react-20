import { useState } from "react";

interface HangmanWordProps {
  wordToGuess: string;
  guessedLetters: string[];
  revealAll: boolean;
}

const HangmanWord = ({ wordToGuess, guessedLetters, revealAll }: HangmanWordProps) => {
  return (
    <div className="flex space-x-2 text-3xl font-mono text-gray-800 tracking-wide">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="border-b-2 w-6 text-center">
          {guessedLetters.includes(letter) || revealAll ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
