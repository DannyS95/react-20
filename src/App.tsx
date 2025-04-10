// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuoteGenerator from './pages/QuoteGenerator';
import Calculator from './pages/Calculator';
import RollDice from './pages/RollDice'; // 🧩 make sure this import exists

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/roll-dice" element={<RollDice />} /> {/* ✅ Correct Route */}
      </Routes>
    </div>
  );
}

export default App;
