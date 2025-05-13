// src/components/BudgetForm.tsx
import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

const BudgetForm = ({ onSetBudget }: { onSetBudget: (budget: number) => void }) => {
  const [budget, setBudget] = useState<string>('');

  const handleChange = (value: string | undefined) => {
    setBudget(value ?? '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!budget) return;

    // Remove currency symbol and parse as float
    const numericBudget = parseFloat(budget.replace('€', '').replace(',', '.').trim());
    onSetBudget(numericBudget);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <label className="block text-gray-700 font-semibold mb-2">Set Your Budget</label>
      
      {/* Custom Currency Input with Euro symbol */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-semibold text-gray-700">€</span>
        <CurrencyInput
          className="w-full border border-gray-300 p-3 rounded"
          value={budget}
          onValueChange={handleChange}
          decimalsLimit={2}
          groupSeparator=","
          decimalSeparator="."
          placeholder="0.00"
        />
      </div>
      
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
