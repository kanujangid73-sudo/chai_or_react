import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-slate-800 p-4 rounded-xl text-white flex gap-4 ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-gray-400 mb-2 block font-medium">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-slate-900 text-white font-semibold py-2 px-3 rounded-lg border border-slate-700 focus:border-blue-500 transition"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-gray-400 w-full mb-2 font-medium">Currency</p>
        <select
          className="rounded-lg px-3 py-2 bg-slate-900 border border-slate-700 text-white font-semibold cursor-pointer outline-none uppercase focus:border-blue-500 transition"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default React.memo(InputBox);