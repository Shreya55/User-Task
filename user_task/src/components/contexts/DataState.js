import React, { useReducer } from "react";
import {NewFormContext} from './NewFormContext'
import { DataReducer } from './DataReducer'

import { ADD_DATA, TOGGLE_DATA, UPDATE_DATA } from "./DataAction";

export const DataState = (props) => {
    const initialState = {
            datas:[],
        }

    const [state, dispatch] = useReducer(DataReducer,initialState )

    const addData = (data) =>{
        dispatch({
            type: ADD_DATA,
            payload: data,
        })
    }

    const toggleData = (dataID) =>{
        dispatch({
            type: TOGGLE_DATA,
            payload: dataID,
        })
    }

    const updataData = (dataID) =>{
        dispatch({
            type: UPDATE_DATA,
            payload: dataID,
        })
    }

    return(
    <NewFormContext.Provider value={
        {
           datas: state.datas,
           addData,
           toggleData,
           updataData, 
        }
    }>
        {props.children}
    </NewFormContext.Provider>
    )
}

