import { useState, useMemo, useCallback } from 'react';
import { InputBox, HistoryLog } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [history, setHistory] = useState([]);

  const { data: currencyInfo, loading } = useCurrencyInfo(from);

  const options = useMemo(() => Object.keys(currencyInfo || {}), [currencyInfo]);

  const swap = useCallback(() => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }, [to, amount, convertedAmount]);

  const convert = () => {
    if (currencyInfo[to]) {
      const result = (amount * currencyInfo[to]).toFixed(2);
      setConvertedAmount(result);

      const newEntry = {
        id: Date.now(),
        amount,
        from,
        to,
        result,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setHistory((prev) => [newEntry, ...prev.slice(0, 9)]);
    }
  };

  const clearHistory = useCallback(() => setHistory([]), []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-950 p-4">
      <div className="w-full max-w-lg border border-slate-800 rounded-2xl p-6 bg-slate-900 shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-blue-500 mb-6">
          Advanced Currency Exchange
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-3">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(curr) => setFrom(curr)}
              selectCurrency={from}
              onAmountChange={(val) => setAmount(val)}
            />
          </div>

          <div className="relative w-full h-2 my-4 flex justify-center items-center">
            <button
              type="button"
              className="z-10 border-2 border-slate-900 rounded-full bg-blue-600 hover:bg-blue-500 text-white p-2 font-bold shadow-md transition transform hover:scale-110"
              onClick={swap}
              title="Swap Currencies"
            >
              🔄
            </button>
          </div>

          <div className="w-full mt-3 mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(curr) => setTo(curr)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg transition cursor-pointer"
          >
            {loading ? "Fetching Rates..." : `Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
          </button>
        </form>

        <HistoryLog history={history} onClear={clearHistory} />
      </div>
    </div>
  );
}

export default App;