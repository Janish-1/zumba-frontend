import React, { createContext, useContext,useReducer,useRef,useEffect, useState } from 'react';
import reducer from '../reducer/AuthReducer';
const StateContext = createContext();
const initialState = {
  isauthenticate:false
};
export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const initialized = useRef(false);

  const initialize = async () => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;
      let isAuthenticated=localStorage.getItem("userId");
    if (isAuthenticated) {
      dispatch({type:"LOGIN_SUCCESS"});
    } else {
      dispatch({
       type:"LOGOUT"
      });
    }
  };
  useEffect(
    () => {
      initialize();
      console.log("running is this")
    },
    []
  );
  return (
    <StateContext.Provider value={{ ...state,dispatch}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
