export const evaluateExpression = (input: string): string => {
    try {
      const result = Function(`"use strict"; return (${input})`)();
      return String(result);
    } catch {
      return "Error";
    }
  };
  