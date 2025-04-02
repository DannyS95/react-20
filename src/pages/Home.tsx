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
        </div>
      </div>
    </div>
  );
};

export default Home;
