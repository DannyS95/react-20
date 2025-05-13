// src/components/ExpenseList.tsx
import React from 'react';

type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

const ExpenseList = ({ expenses, budget }: { expenses: Expense[]; budget: number | null }) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-200 p-6 rounded-lg shadow-md mt-5 w-full max-w-4xl overflow-auto">
      <h2 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
        Expenses
      </h2>

      {/* Always display the balance */}
      {budget !== null && (
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-gray-500">Balance:</p>
          <span className="text-xl text-purple-600">
            ${budget - totalExpenses > 0 ? (budget - totalExpenses).toFixed(2) : '0.00'}
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className={`h-2 rounded-full ${totalExpenses > budget ? 'bg-red-600' : 'bg-green-500'}`}
              style={{ width: `${Math.min((totalExpenses / budget) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {expenses.map((expense, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-indigo-300 shadow-sm relative overflow-hidden h-38">
            <p className="text-lg font-medium text-indigo-800 mb-4 h-16 overflow-hidden">
              {expense.description}
            </p>

            {/* Top-right corner Amount Display */}
            <p className="absolute top-2 right-3 text-indigo-600 font-bold text-md p-1">
              ${expense.amount.toFixed(2)}
            </p>

            <div className="absolute bottom-3 left-4">
              <p className="text-sm text-gray-500">Date: {new Date(expense.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
