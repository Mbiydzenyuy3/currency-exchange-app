import { useWallet } from "../context/appContext";
import { useCurrencyConverter } from "../services/api-service";

export const Transactions = () => {
  const { wallet } = useWallet();
  const { convert } = useCurrencyConverter();

  const calculateTransactions = () => {
    return Object.entries(wallet).reduce((total, [currency, amount]) => {
      if (currency === "defaultCurrency") return total;
      const convertedAmount = convert(amount, currency, wallet.defaultCurrency);
      return total + (convertedAmount || 0);
    }, 0);
  };

  return (
    <div>
      <h2>Total Balance</h2>
      <p>
        {calculateTransactions().toFixed(2)} {wallet.defaultCurrency}
      </p>
    </div>
  );
};
