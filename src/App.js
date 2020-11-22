
import './App.css';

import {Header} from './Components/Header.js';
import {Balance} from './Components/Balance.js';
import {AccountSummary} from './Components/AccountSummary.js';
import {TransactionHistory} from './Components/TransactionHistory.js';
import {AddTransaction} from './Components/AddTransaction.js';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
  <GlobalProvider>
  <div>
  <Header/>
  
  <div className="container">
  <Balance/>
  <AccountSummary/>
  <TransactionHistory/>
  <AddTransaction/>
  </div>

  </div>
  </GlobalProvider>
    
  );
}

export default App;
