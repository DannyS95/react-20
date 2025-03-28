// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import QuoteGenerator from './pages/QuoteGenerator';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
      </Routes>
    </div>
  );
}

export default App;
