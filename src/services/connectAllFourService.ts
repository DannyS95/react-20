export type Cell = "R" | "Y" | null;
export type Board = Cell[][];
export type Player = "R" | "Y";

interface Direction {
  name: string;
  steps: { rowStep: number; colStep: number }[];
}

interface WinResult {
  winner: Player;
  winningCells: { row: number; col: number }[];
}

const directions: Direction[] = [
    { name: "horizontal", steps: [{ rowStep: 0, colStep: -1 }, { rowStep: 0, colStep: 1 }] },
    { name: "vertical", steps: [{ rowStep: -1, colStep: 0 }, { rowStep: 1, colStep: 0 }] },
    { name: "diagonalDownRightUpLeft", steps: [{ rowStep: 1, colStep: 1 }, { rowStep: -1, colStep: -1 }] },
    { name: "diagonalDownLeftUpRight", steps: [{ rowStep: 1, colStep: -1 }, { rowStep: -1, colStep: 1 }] },
];

export const checkWinner = (
    board: ("R" | "Y" | null)[][],
    lastRow: number,
    lastCol: number,
    player: "R" | "Y"
  ): WinResult | null => {

    const inBounds = (row: number, col: number) => {
        return row >= 0 && row < board.length && col >= 0 && col < board[0].length;
      };

    const collectWinningCells = (rowStep: number, colStep: number) => {
        const cells = [];
        let r = lastRow + rowStep;
        let c = lastCol + colStep;

        while (inBounds(r, c) && board[r][c] === player) {
            cells.push({ row: r, col: c });
            r += rowStep;
            c += colStep;
        }

        return cells;
    };

    for (const direction of directions) {
        let winningCells = [{ row: lastRow, col: lastCol }];
    
        for (const step of direction.steps) {
          winningCells = winningCells.concat(collectWinningCells(step.rowStep, step.colStep));
        }
    
        if (winningCells.length >= 4) {
          return {
            winner: player,
            winningCells,
          };
        }
      }

    return null;
  };
  