// src/components/BudgetForm.tsx
import React, { useState } from 'react';

const BudgetForm = ({ onSetBudget }: { onSetBudget: (budget: number) => void }) => {
  const [budget, setBudget] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSetBudget(budget);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <label className="block text-gray-700 font-semibold mb-2">Set Your Budget</label>
      <input
        type="number"
        value={budget}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded"
        placeholder="Enter your budget"
      />
      <button
        type="submit"
        className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Set Budget
      </button>
    </form>
  );
};

export default BudgetForm;
