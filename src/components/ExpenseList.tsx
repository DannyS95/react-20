import React from 'react';

type Expense = {
  description: string;
  amount: number;
  category: string;
  date: string;
};

const ExpenseList = ({ expenses }: { expenses: Expense[] }) => {
  if (expenses.length === 0) {
    return <h2 className="text-gray-500 text-lg font-medium">No expenses recorded yet.</h2>;
  }

  return (
    <>
      <div className="bg-gradient-to-br from-purple-100 to-indigo-200 p-6 rounded-lg shadow-md mt-5 w-full max-w-4xl overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-center text-indigo-700">Expenses</h2>
        <div className="grid grid-cols-2 gap-4 pb-20">
          {expenses.map((expense, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-indigo-300 shadow-sm relative overflow-hidden h-56"
            >
              {/* Description fills available space and breaks naturally */}
              <p className="text-lg font-medium text-indigo-800 mb-4 mt-4 h-full flex items-start break-words overflow-hidden w-[90%]">
                {expense.description}
              </p>

              {/* Top-right corner Amount Display */}
              <p className="absolute top-2 right-3 text-indigo-600 font-bold text-md p-1">
                ${expense.amount.toFixed(2)}
              </p>

              <div className="absolute bottom-3 left-4">
                <p className="text-sm text-gray-500">Category: {expense.category}</p>
                <p className="text-sm text-gray-500">Date: {new Date(expense.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
