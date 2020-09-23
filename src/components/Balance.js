import React from "react";
import { GlobalContext } from "./context/GlobalState";

export const Balance = () => {
  const { transactions } = React.useContext(GlobalContext);

  const trans_amount = transactions.map((transaction) => transaction.amount);
  const total = trans_amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h2>Your Balance</h2>
      <h1 id="balance">{total} PKR</h1>
    </div>
  );
};
