import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import BudgetForm from '../components/BudgetForm';
import { v4 as uuidv4 } from 'uuid';

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
  category: string;
}

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budget, setBudget] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'budget' | 'expenses'>('expenses');

  const [dateFilter, setDateFilter] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [amountFilter, setAmountFilter] = useState<string>('');
  const [descriptionFilter, setDescriptionFilter] = useState<string>('');

  const handleAddExpense = (expense: Expense) => {
    if (!expense.id) {
      expense.id = uuidv4();
    }
    setExpenses((prev) => [...prev, expense]);
  };

  const handleSetBudget = (newBudget: number) => {
    setBudget(newBudget);
    setViewMode('expenses');
  };

  const handleRemoveExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleFilterChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = budget !== null ? budget - totalExpenses : 0;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 space-y-6">
      {viewMode === 'expenses' && (
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
            onClick={() => setViewMode('budget')}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition"
          >
            ✎ Edit Budget
          </button>
        </div>
      )}

      {viewMode === 'expenses' ? (
        <>
          <div className="w-full max-w-4xl mb-8">
            <ExpenseForm onAddExpense={handleAddExpense} />
          </div>

          {expenses.length > 0 && (
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
                  removeExpense={handleRemoveExpense}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="w-full max-w-md mb-5">
          <BudgetForm onSetBudget={handleSetBudget} />
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
