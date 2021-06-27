import React,{createContext,useContext,useReducer} from 'react'


//preparing data layer
export const StateContext = createContext();
//wrap our components and provide provider
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
) 

export const useStateValue = () => useContext(StateContext)