import React, { createContext,useReducer } from 'react';

//create initial state of context

const initialState={
    transaction:[
{id:1,description:"Income 1",transactionAmount:1000},
{id:2,description:"Expense 1",transactionAmount:-100},
{id:3,description:"Income 2",transactionAmount:2000},
{id:4,description:"Expense 2",transactionAmount:-500}
          
    ]
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider = ({children}) => {

    return (
        <GlobalContext.Provider value={

            {
    transactions:state.transactions
            }
        }>
            {children} 
        </GlobalContext.Provider>
    )
}