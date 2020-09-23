import React from "react";
import { GlobalContext } from "./context/GlobalState";

export const NewTransaction = () => {

        const [text, setText] = React.useState("");
        const [amount, setAmount] = React.useState(0);
    
    const {addTransaction} = React.useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

 
  return (
    <div>
      <h3>Add a new record</h3>
      <form onSubmit={onSubmit}>
        <div className="new-tr" id="new-tr">
          <div>
            <label htmlFor="text">Description</label> <br></br>
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Enter text"
            ></input>
          </div>
          <br></br>
          <div>
            <label htmlFor="amount">Amount*</label> <br></br>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Enter text"
            ></input>
            <p style={{ fontSize: "12px" }}>
              * positive for income and negative for expense
            </p>
          </div>
          <div style={{display:'flex',justifyContent:"center",position:'relative'}}>
          <button id="new-tr-btn" className="new-tr-btn" >
            Add Record
          </button>
          </div>
          
          <br></br>
        </div>
        
      </form>
    </div>
    
  );
};
