import React from "react";

export const Header = () => {
  return (
    <div>
      <br></br>
      <img
        src="money.png"
        style={{ height: "150px", width: "150px" }}
        alt="Money illustration"
      ></img>
      <h1 style={{ fontSize: "50px" }}>
        {" "}
        <strong>Expense Tracker</strong>
      </h1>
      <h3>Manage your expenses</h3>
    </div>
  );
};
