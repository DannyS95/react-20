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
  // Main State
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budget, setBudget] = useState<number | null>(null);

  // Filter States
  const [dateFilter, setDateFilter] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [amountFilter, setAmountFilter] = useState<string>('');
  const [descriptionFilter, setDescriptionFilter] = useState<string>('');

  // Handlers
  const handleAddExpense = (expense: Expense) => {
    if (!expense.id) {
      expense.id = uuidv4();
    }
    setExpenses((prev) => [...prev, expense]);
  };

  const handleSetBudget = (newBudget: number) => {
    setBudget(newBudget);
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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      {expenses.length === 0 && budget === null ? (
        <BudgetForm onSetBudget={handleSetBudget} />
      ) : (
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

              <ExpenseList
                expenses={filteredExpenses}
                budget={budget}
                removeExpense={handleRemoveExpense}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExpenseTracker;
