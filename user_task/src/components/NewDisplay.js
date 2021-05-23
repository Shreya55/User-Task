import React, {useContext} from 'react'
import {NewFormContext} from './contexts/NewFormContext'
import {View} from './View'

export const NewDisplay = () => {

    const {show} = useContext(NewFormContext)
    
    return (
        <div style={{border: '1px solid black', width: 320, marginLeft: 50, marginRight: 50, marginTop: 80, height: 500 }}>
            {show ? <><View/></> : <></>}
        </div>
    )
}
