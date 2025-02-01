import { useWallet } from "../context/appContext";

export const UserDefaultCurrency = () => {
  const { wallet, updateWallet } = useWallet();

  const handleDefaultCurrencyChange = (e) => {
    updateWallet({
      ...wallet,
      defaultCurrency: e.target.value,
    });
  };

  return (
    <div>
      <h2></h2>
      <label className="user-label-card">
        User Default Currency:
        <select
          value={wallet.defaultCurrency}
          onChange={handleDefaultCurrencyChange}
        >
          {Object.keys(wallet)
            .filter((key) => key !== "defaultCurrency")
            .map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
};
