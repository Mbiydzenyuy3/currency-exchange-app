import { WalletProvider } from "./context/appContext";
import { Transactions } from "./components/Transactions";
import Balance from "./components/Balance";
import { CurrencyExchange } from "./components/CurrencyExchange";
import Deposit from "./components/Deposit";
import { UserDefaultCurrency } from "./components/userDefault";
import "./App.css";

export default function App() {
  return (
    <WalletProvider>
      <div className="app">
        <h1>Track Your Transactions</h1>
        <div className="container">
          <div className="balance">
            <Balance />
          </div>
          <div className="deposit">
            <Deposit />
          </div>
          <div className="exchange">
            <CurrencyExchange />
          </div>

          <div className="total-balance">
            <Transactions />
          </div>
          <div className="user-setting">
            <UserDefaultCurrency />
          </div>
        </div>
      </div>
    </WalletProvider>
  );
}
