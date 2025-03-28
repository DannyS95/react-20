// src/pages/Home.tsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">React 20 Challenges</h1>
        <Link
          to="/quote-generator"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Quote Generator
        </Link>
      </div>
    </div>
  );
};

export default Home;
