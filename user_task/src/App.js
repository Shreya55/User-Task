import React from 'react';
import './App.css'
import {NewForm} from './components/NewForm'
import {DataList} from './components/DataList'
import {DataState} from './components/contexts/DataState'

export default function App() {

  return (
    <div className='rowC'>
      <DataState>
        <NewForm/>
        <DataList/>
      </DataState>
      
    </div>
  );
}

