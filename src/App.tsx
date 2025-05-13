import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuoteGenerator from './pages/QuoteGenerator';
import Calculator from './pages/Calculator';
import RollDice from './pages/RollDice';
import ConnectFour from "./pages/ConnectFour";
import ExpenseTracker from "./pages/ExpenseTracker";
import GradientGenerator from './pages/GradientGenerator';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/roll-dice" element={<RollDice />} />
        <Route path="/connect-four" element={<ConnectFour />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/gradient-generator" element={<GradientGenerator />} />
      </Routes>
    </div>
  );
}

export default App;