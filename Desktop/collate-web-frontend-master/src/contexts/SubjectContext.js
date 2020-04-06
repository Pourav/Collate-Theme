import React, {createContext, useEffect, useState, useReducer} from 'react';
import {subjectReducer} from '../reducers/subjectReducer';
//create a user context
export const SubjectContext=createContext();
const initState={
        SubjectList:[
            
        ]
    
}

//set up context provider
 export const SubjectContextProvider=(props)=>{
    const [subjectState, dispatch] = useReducer(subjectReducer,initState);
    return(
        <SubjectContext.Provider value={{subjectState,dispatch}}>
            {props.children}
        </SubjectContext.Provider>
    )
}

