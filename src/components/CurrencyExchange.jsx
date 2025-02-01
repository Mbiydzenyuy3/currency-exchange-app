import { useState } from "react";
import { useWallet } from "../context/appContext";
import { useCurrencyConverter } from "../services/api-service";

export const CurrencyExchange = () => {
  const { wallet, updateWallet } = useWallet();
  const { convert } = useCurrencyConverter();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const handleExchange = () => {
    if (!amount || isNaN(amount)) return;

    const convertedAmount = convert(
      parseFloat(amount),
      fromCurrency,
      toCurrency
    );
    if (convertedAmount === null) return;

    if (wallet[fromCurrency] >= parseFloat(amount)) {
      updateWallet({
        ...wallet,
        [fromCurrency]: wallet[fromCurrency] - parseFloat(amount),
        [toCurrency]: wallet[toCurrency] + convertedAmount,
      });
    } else {
      alert("Insufficient funds");
    }
  };

  return (
    <div>
      <h2>Exchange Currency</h2>
      <div className="exchange-card">
        <select className="currencies"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(wallet)
            .filter((key) => key !== "defaultCurrency")
            .map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter exchange amount "
        />
        <select className="default-currencies-field"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(wallet)
            .filter((key) => key !== "defaultCurrency")
            .map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
        <button onClick={handleExchange}>Exchange</button>
      </div>
    </div>
  );
};
