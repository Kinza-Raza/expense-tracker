import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {

    transactions:
    [
        {id:1, text:'Grocery', amount:-500 },
        {id:2, text:'Car repair', amount:-300 },
        {id:3, text:'Rent', amount:1500 }

    ]
};

// Create Context
export const GlobalContext = createContext(initialState);


// Provider
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = React.useReducer(AppReducer, initialState);

    // Actions

    function deleteTransaction(id) {

        dispatch( {
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transactions) {

        dispatch( {
            type:'ADD_TRANSACTION',
            payload: transactions
        });
    }


    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
         {children} </GlobalContext.Provider>);
}