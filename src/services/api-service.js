import { useState, useEffect } from "react";

const API_KEY =
  "https://openexchangerates.org/api/latest.json?app_id=0f79e513137a41bfbea8ff3686d2d042";

export const useCurrencyConverter = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/USD?apikey=${API_KEY}`
        );
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchRates();
  }, []);

  const convert = (amount, from, to) => {
    if (!rates) return null;
    const fromRate = rates[from];
    const toRate = rates[to];
    return (amount / fromRate) * toRate;
  };

  return { convert, rates };
};
