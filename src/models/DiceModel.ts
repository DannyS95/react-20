// src/models/DiceModel.ts
export const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"] as const;

export interface DiceModel {
  value: number;
  face: string;
  isRolling: boolean;
}

export const createDice = (value: number, isRolling = false): DiceModel => ({
  value,
  face: diceFaces[value - 1],
  isRolling
});
