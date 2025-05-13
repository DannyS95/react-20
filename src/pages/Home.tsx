// src/pages/Home.tsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">React 20 Challenges</h1>

        <div className="space-y-3">
          <Link
            to="/quote-generator"
            className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            💭 Quote Generator
          </Link>

          <Link
            to="/calculator"
            className="block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            🔢 Calculator
          </Link>

          <Link
            to="/roll-dice"
            className="block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            🎲 Roll Dice
          </Link>
          <Link
            to="/connect-four"
            className="block px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            🔴 Connect Four
          </Link>
          <Link
            to="/expense-tracker"
            className="block px-6 py-2 text-white rounded transition bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 hover:from-orange-600 hover:via-blue-600 hover:to-green-600"
          >
            💰 Expense Tracker
          </Link>

          <Link
            to="/gradient-generator"
            className="block px-6 py-2 text-white rounded transition bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600"
          >
            🎨 Gradient Generator
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
