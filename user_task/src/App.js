import React, {useState} from 'react';
import './App.css'
import {NewForm} from './components/NewForm'
import { NewDisplay } from './components/NewDisplay';
import {NewFormContext} from './components/contexts/NewFormContext'
import {View} from './components/View'

export default function App() {
  const [show, setShow]= useState(false)
  const [name, setName]= useState('')
  const [age, setAge]= useState('')
  const [city, setCity]= useState('')
  const [phno, setPhno]= useState('')

  // const users= [name,age,city,phno]
  return (
    <div className='rowC'>
      <NewFormContext.Provider value={{name, age, city, phno, show, setName, setAge, setCity, setPhno, setShow}}>
      
      <><NewForm/><NewDisplay/></>
        
      </NewFormContext.Provider>
      
    </div>
  );
}

