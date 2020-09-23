import React from "react";
import { GlobalContext } from "./context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = React.useContext(GlobalContext);

  const trans_amount = transactions.map((transaction) => transaction.amount);

  const income = trans_amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    trans_amount
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-cont">
      <table>
        <tbody>
          <tr>
            <th>Income</th>
            <th>Expense</th>
          </tr>

          <tr>
            <td className="inc" id="inc" style={{ color: "green" }}>
              <strong>{income} PKR</strong>
            </td>
            <td className="exp" id="exp" style={{ color: "red" }}>
              <strong>{expense} PKR</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
