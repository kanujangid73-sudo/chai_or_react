// src/App.jsx
import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [result, setResult] = useState(0);

  const currencyRates = useCurrencyInfo(from);

  const convert = () => {
    if (currencyRates[to]) {
      setResult(amount * currencyRates[to]);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-gray-100 rounded-xl space-y-4">
      <h1 className="text-xl font-bold">Basic Currency Converter</h1>
      
      <div>
        <label>Amount: </label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))}
          className="p-1 border rounded w-full"
        />
      </div>

      <div className="flex gap-4">
        <div>
          <label>From: </label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select>
        </div>

        <div>
          <label>To: </label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select>
        </div>
      </div>

      <button onClick={convert} className="w-full bg-blue-600 text-white py-2 rounded">
        Convert
      </button>

      <p className="font-semibold text-lg">Converted Amount: {result}</p>
    </div>
  );
}

export default App;