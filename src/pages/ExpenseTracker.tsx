// src/pages/ExpenseTracker.tsx
import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import BudgetForm from '../components/BudgetForm';

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budget, setBudget] = useState<number | null>(null);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const handleSetBudget = (newBudget: number) => {
    setBudget(newBudget);
  };

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
            <div className="w-full max-w-3xl flex justify-center flex-grow overflow-y-auto mb-9">
              <ExpenseList expenses={expenses} budget={budget} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExpenseTracker;
