import React from 'react';

function HistoryLog({ history, onClear }) {
  if (history.length === 0) return null;

  return (
    <div className="mt-6 bg-slate-800 p-4 rounded-xl text-white">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg text-blue-400">Conversion History</h3>
        <button
          onClick={onClear}
          className="text-xs text-red-400 hover:text-red-300 underline cursor-pointer"
        >
          Clear History
        </button>
      </div>
      <div className="max-h-40 overflow-y-auto space-y-2 pr-1">
        {history.map((item) => (
          <div key={item.id} className="flex justify-between text-sm bg-slate-900 p-2.5 rounded-lg border border-slate-700">
            <span>{item.amount} {item.from.toUpperCase()} → <strong className="text-emerald-400">{item.result} {item.to.toUpperCase()}</strong></span>
            <span className="text-xs text-gray-500">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(HistoryLog);