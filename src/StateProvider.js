import React,{ createContext, useContext, useReducer} from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wraps the app and provides the dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pulls information from the dataLayer
export const useStateValue = () => useContext(StateContext);