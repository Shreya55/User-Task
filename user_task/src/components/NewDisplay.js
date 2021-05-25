import React, {useContext} from 'react'
import {NewFormContext} from './contexts/NewFormContext'
import {View} from './View'

export const NewDisplay = () => {

    const {name} = useContext(NewFormContext)
    const {age} = useContext(NewFormContext)
    const {city} = useContext(NewFormContext)
    const {phno} = useContext(NewFormContext)

    const {show} = useContext(NewFormContext)
    const users= [name,age,city,phno]

    const x=users.map(
        ()=> ( <View key={phno} name={name} age={age} city={city} phno={phno}
        />)
    )
    
    return (
        <div style={{border: '1px solid black', width: 320, marginLeft: 50, marginRight: 50, marginTop: 80, height: 500, overflowY:'auto' }}>
            {show ? <>{x}</> : <></>}
        </div>
    )
}
