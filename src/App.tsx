// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import QuoteGenerator from './pages/QuoteGenerator';
import Calculator from './pages/Calculator';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
        <Route path="/calculator" element={<Calculator />} />

      </Routes>
    </div>
  );
}

export default App;
