// src/models/DiceModel.ts
export const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"] as const;

export interface DiceModel {
  value: number;     // 1–6
  face: string;      // matching face emoji
}

export const createDice = (value: number): DiceModel => ({
  value,
  face: diceFaces[value - 1],
});
