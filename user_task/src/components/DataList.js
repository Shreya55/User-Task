import React, { useContext } from "react";
import {NewFormContext} from './contexts/NewFormContext'
import {View} from './View'

export const DataList = () => {
    const {datas, toggleData, updateData} = useContext(NewFormContext)
    return (
        <div style={{border: '1px solid black', width: 320, marginLeft: 50, marginRight: 50, marginTop: 80, height: 500, overflowY:'auto' }}>
            {datas.map((data) => (
          <View
            key={data.id}
            name= {data.name}
            age= {data.age}
            city= {data.city}
            phno= {data.phno}
            show= {false}
            clickToToggle={() => toggleData(data.id)}
            clickToUpdate={() => updateData(data.id)}
          />
        ))}
        </div>
    )
}

