import React, {createContext, useEffect, useState, useReducer} from 'react';
import {authReducer} from '../reducers/authReducer';
//create a user context
export const UserContext=createContext();
const initState={
    isAuthenticated:false,
    doesUserExist:false,
    isUserSignedUp:false,
    isUserConfirmed:false,
    isUserDetails:false,
    user:null,
    token: null
}
//just a random comment
//set up context provider
 export const UserContextProvider=(props)=>{
    //console.log('context');
  const [state, dispatch] = useReducer(authReducer, initState,()=>{
    const data=localStorage.getItem('state');
    return data?JSON.parse(data):initState
  });
  useEffect(()=>{
      localStorage.setItem('state',JSON.stringify(state));
  },[state])
    return(
        <UserContext.Provider value={{state,dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

