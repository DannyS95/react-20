import React from 'react';

type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
  category: string;
};

const ExpenseList = ({
  expenses,
  budget,
  removeExpense,
}: {
  expenses: Expense[];
  budget: number | null;
  removeExpense: (id: string) => void;
}) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Currency Formatter
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);

  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-200 p-6 rounded-lg shadow-md mt-5 w-full max-w-4xl overflow-auto">
      <h2 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
        Expenses
      </h2>

      {budget !== null && (
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-gray-500">Balance:</p>
          <span className={`text-xl ${totalExpenses > budget ? 'text-red-600' : 'text-purple-600'}`}>
            {totalExpenses > budget
              ? `- ${formatCurrency(totalExpenses - budget)}`
              : `${formatCurrency(budget - totalExpenses)}`}
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className={`h-2 rounded-full ${totalExpenses > budget ? 'bg-red-600' : 'bg-green-500'}`}
              style={{ width: `${Math.min((totalExpenses / budget) * 100, 100) || 1}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-white p-4 rounded-lg border border-indigo-300 shadow-sm relative overflow-hidden h-40"
          >
            <p className="text-lg font-medium text-indigo-800 mb-4 h-full flex items-start break-words overflow-hidden w-[90%]">
              {expense.description}
            </p>

            <p className="absolute top-2 right-3 text-indigo-600 font-bold text-md p-1">
              {formatCurrency(expense.amount)}
            </p>

            <div className="absolute bottom-3 left-4">
              <p className="text-sm text-gray-500">Date: {new Date(expense.date).toLocaleDateString()}</p>
              <p className="text-sm text-gray-500">Category: {expense.category}</p>
            </div>

            <button
              onClick={() => removeExpense(expense.id)}
              className="absolute bottom-3 right-3 text-red-500 hover:text-red-700 p-1"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
