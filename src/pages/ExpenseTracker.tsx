import React, { useState } from 'react';
import BudgetForm from '../components/BudgetForm';
import { v4 as uuidv4 } from 'uuid';
import ExpenseView from '../components/ExpenseView';

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
  const [viewMode, setViewMode] = useState<'budget' | 'expenses'>(budget === null ? 'budget' : 'expenses');

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

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = budget !== null ? budget - totalExpenses : 0;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10 space-y-6">
      {viewMode === 'expenses' ? (
        <ExpenseView
          budget={budget}
          expenses={expenses}
          totalExpenses={totalExpenses}
          remaining={remaining}
          dateFilter={dateFilter}
          categoryFilter={categoryFilter}
          amountFilter={amountFilter}
          descriptionFilter={descriptionFilter}
          setDateFilter={setDateFilter}
          setCategoryFilter={setCategoryFilter}
          setAmountFilter={setAmountFilter}
          setDescriptionFilter={setDescriptionFilter}
          onAddExpense={handleAddExpense}
          onRemoveExpense={handleRemoveExpense}
          onEditBudget={() => setViewMode('budget')}
        />
      ) : (
        <div className="w-full max-w-md mb-5">
          <BudgetForm onSetBudget={handleSetBudget} />
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
