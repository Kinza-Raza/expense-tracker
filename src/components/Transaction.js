import React from 'react'

export const Transaction = ({trans}) => {

    const x =  trans.amount < 0 ? "minus" : "plus";
    return (
        <div>
            
           <li className= {x}> {trans.text}
                <span> {trans.amount} PKR</span> 
            <button className="delete-btn">x</button>
            </li>
        </div>
    )
}
