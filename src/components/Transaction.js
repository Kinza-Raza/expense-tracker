import React from "react";
import { GlobalContext } from "./context/GlobalState";

export const Transaction = ({ trans }) => {
  const { deleteTransaction } = React.useContext(GlobalContext);
  const x = trans.amount < 0 ? "minus" : "plus";
  const sign = trans.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={x}>
        {" "}
        {trans.text}
        <span>
          {" "}
          {sign}
          {Math.abs(trans.amount)} PKR
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(trans.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};
