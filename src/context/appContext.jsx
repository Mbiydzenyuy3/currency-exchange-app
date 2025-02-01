import { createContext, useState, useContext } from "react";

// Create the Wallet Context
const WalletContext = createContext();

// Wallet Provider Component
export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState({
    USD: 0,
    EUR: 0,
    XAF: 0,
    defaultCurrency: "XAF",
  });

  // Function to update the wallet state
  const updateWallet = (newWallet) => setWallet(newWallet);

  return (
    <WalletContext.Provider value={{ wallet, updateWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook to use the Wallet Context
export const useWallet = () => useContext(WalletContext);
