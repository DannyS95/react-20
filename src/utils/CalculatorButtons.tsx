export type CalcButtonSpec = {
    label: string;
    type: "number" | "operator" | "action" | "evaluate";
  };
  
  export const calculatorButtonSpecs: CalcButtonSpec[] = [
    { label: "C", type: "action" },
    { label: "←", type: "action" },
    { label: "%", type: "operator" },
    { label: "/", type: "operator" },
  
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "*", type: "operator" },
  
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "-", type: "operator" },
  
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "+", type: "operator" },
  
    { label: "0", type: "number" },
    { label: ".", type: "number" },
    { label: "=", type: "evaluate" },
  ];
  