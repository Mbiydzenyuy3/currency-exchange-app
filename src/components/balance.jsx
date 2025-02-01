import { useWallet } from "../context/appContext";

export default function Balance() {
  // Get the wallet data from the context
  const { wallet } = useWallet();

  // Create an array of currency entries, excluding 'defaultCurrency'
  const currencyEntries = Object.entries(wallet).filter(
    ([currency]) => currency !== "defaultCurrency"
  );

  return (
    <div>
      <h2>Balance</h2>
      {currencyEntries.length === 0 ? (
        <p>No balance to display.</p>
      ) : (
        currencyEntries.map(([currency, amount]) => (
          <p key={currency}>
            {currency} balance: {amount} {currency}
          </p>
        ))
      )}
    </div>
  );
}
