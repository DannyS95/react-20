import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList, { Expense } from '../components/ExpenseList';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 overflow-x-hidden">
        <div className="flex flex-col items-center w-full max-w-5xl mb-8">
            <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="flex flex-col items-center w-full max-w-5xl flex-grow min-h-[60vh] overflow-y-auto">
            <ExpenseList expenses={expenses} />
        </div>
    </div>


  );
};

export default ExpenseTracker;
