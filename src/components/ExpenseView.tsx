import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
  category: string;
}

interface ExpenseViewProps {
  budget: number | null;
  expenses: Expense[];
  totalExpenses: number;
  remaining: number;
  dateFilter: string;
  categoryFilter: string;
  amountFilter: string;
  descriptionFilter: string;
  setDateFilter: React.Dispatch<React.SetStateAction<string>>;
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
  setAmountFilter: React.Dispatch<React.SetStateAction<string>>;
  setDescriptionFilter: React.Dispatch<React.SetStateAction<string>>;
  onAddExpense: (expense: Expense) => void;
  onRemoveExpense: (id: string) => void;
  onEditBudget: () => void;
}

const ExpenseView = ({
  budget,
  expenses,
  totalExpenses,
  remaining,
  dateFilter,
  categoryFilter,
  amountFilter,
  descriptionFilter,
  setDateFilter,
  setCategoryFilter,
  setAmountFilter,
  setDescriptionFilter,
  onAddExpense,
  onRemoveExpense,
  onEditBudget,
}: ExpenseViewProps) => {
  const handleFilterChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      (!dateFilter || new Date(expense.date).toLocaleDateString().includes(dateFilter)) &&
      (!categoryFilter || expense.category.toLowerCase().includes(categoryFilter.toLowerCase())) &&
      (!amountFilter || expense.amount.toString().includes(amountFilter)) &&
      (!descriptionFilter || expense.description.toLowerCase().includes(descriptionFilter.toLowerCase()))
    );
  });

  return (
    <>
      <div className="w-full max-w-2xl p-8 rounded-lg shadow-md bg-gradient-to-r from-green-100 to-blue-100 flex justify-between items-center space-x-2">
        <div className="text-2xl font-semibold flex flex-col items-center">
          <span className={remaining < 0 ? "text-red-500" : "text-green-500"}>Total Budget</span>
          <span className="text-xl font-bold text-gray-600 tracking-tight leading-snug">
            {budget !== null ? `€${budget.toFixed(2)}` : "Not Set"}
          </span>
        </div>
        <div className="text-2xl font-semibold text-gray-700 flex flex-col items-center">
          <span className="text-red-500">Total Spent</span>
          <span className="text-xl font-bold text-gray-600 tracking-tight leading-snug">
            €{totalExpenses.toFixed(2)}
          </span>
        </div>
        <button
          onClick={onEditBudget}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition"
        >
          ✎ Edit Budget
        </button>
      </div>

      <div className="w-full max-w-4xl mb-8">
        <ExpenseForm onAddExpense={onAddExpense} />
      </div>

      {filteredExpenses.length > 0 && (
        <div className="w-full max-w-3xl flex flex-col items-center mb-4">
          <div className="flex justify-center space-x-4 mb-4">
            <input
              type="text"
              placeholder="Date"
              value={dateFilter}
              onChange={handleFilterChange(setDateFilter)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={categoryFilter}
              onChange={handleFilterChange(setCategoryFilter)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Amount"
              value={amountFilter}
              onChange={handleFilterChange(setAmountFilter)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={descriptionFilter}
              onChange={handleFilterChange(setDescriptionFilter)}
              className="border p-2 rounded"
            />
          </div>

          <div className="w-full max-w-3xl flex flex-col items-center mb-4 space-y-4 pb-10">
            <ExpenseList
              expenses={filteredExpenses}
              budget={budget}
              removeExpense={onRemoveExpense}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ExpenseView;
