import React from 'react'
import { GlobalContext } from "./context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = React.useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((trans) => (
          <Transaction key={transactions.id} trans={trans}></Transaction>
        ))}
      </ul>
    </div>
  );
};
