import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { GlobalProvider } from './components/context/GlobalState';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { NewTransaction } from './components/NewTransaction';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="cont-1">
      <Balance></Balance>
      </div>
      <IncomeExpenses></IncomeExpenses>
      <TransactionList></TransactionList>
      <NewTransaction></NewTransaction>
      </GlobalProvider>
    

  );
}

export default App;
