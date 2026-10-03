import { useEffect, useState } from 'react';

// In-memory cache memory store
const ratesCache = {};

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currency) return;

    if (ratesCache[currency]) {
      setData(ratesCache[currency]);
      return;
    }

    setLoading(true);
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        ratesCache[currency] = res[currency];
        setData(res[currency]);
      })
      .catch((err) => console.error("Error fetching rates:", err))
      .finally(() => setLoading(false));
  }, [currency]);

  return { data, loading };
}

export default useCurrencyInfo;