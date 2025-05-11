import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ExpenseForm = ({ onAddExpense }: { onAddExpense: (expense: any) => void }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    date: new Date()
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { description, amount, category, date } = formData;
    if (!description || !amount || !category) return;

    const expense = {
      description,
      amount: parseFloat(amount),
      category,
      date,
    };

    onAddExpense(expense);

    // Clear form
    setFormData({
      description: '',
      amount: '',
      category: '',
      date: new Date()
    });
  };

  return (
    <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-6 w-full max-w-lg"
    >
    <div>
        <label className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-24"
        />
    </div>

    <div>
        <label className="block text-gray-700 font-semibold mb-2">Amount</label>
        <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
    </div>

    <div>
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <input
        name="category"
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
    </div>

    <div>
        <label className="block text-gray-700 font-semibold mb-2">Date</label>
        <Flatpickr
        className="w-full border border-gray-300 p-3 rounded"
        value={formData.date}
        options={{ dateFormat: "Y-m-d" }}
        onChange={(date) => setFormData((prev) => ({ ...prev, date: date[0] }))}
        />
    </div>

    <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg hover:from-purple-600 hover:to-indigo-700 shadow-md transition"
    >
        💸 Add Expense
    </button>
    </form>
  );
};

export default ExpenseForm;
