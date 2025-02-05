import { useState } from "react";
import { useWallet } from "../context/appContext";

function Deposit() {
  // Use the wallet context
  const { wallet, updateWallet } = useWallet();

  // State for the selected currency and amount
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [depositAmount, setDepositAmount] = useState("");

  // Function to handle the deposit
  function handleDeposit() {
    // Check if the amount is valid
    if (!depositAmount || isNaN(depositAmount)) {
      alert("Please enter a valid amount");
      return;
    }

    // Convert the amount to a number
    const amountToDeposit = parseFloat(depositAmount);

    // Update the wallet
    updateWallet({
      ...wallet,
      [selectedCurrency]: wallet[selectedCurrency] + amountToDeposit,
    });

    // Clear the input field
    setDepositAmount("");

    // Show a success message
    alert(`Successfully deposited ${amountToDeposit} ${selectedCurrency}`);
  }

  // Get the list of currencies (excluding defaultCurrency)
  const currencies = Object.keys(wallet).filter(
    (key) => key !== "defaultCurrency"
  );

  return (
    <>
      <h2>Deposit Money</h2>
      <div className="deposit-card">
        <div>
          <select
            id="currency-select"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            id="amount-input"
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Enter deposit amount"
          />
        </div>
        <button onClick={handleDeposit}>Deposit</button>
      </div>
    </>
  );
}

export default Deposit;
