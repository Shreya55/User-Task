import React, {useState, createContext, useContext} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import {NewFormContext} from './contexts/NewFormContext'
import {View} from './View'

export const NewForm = () => {
    // const [name, setName]= useState('')
    // const [age, setAge]= useState('')
    // const [city, setCity]= useState('')
    // const [phno, setPhno]= useState('')

    const {setName} = useContext(NewFormContext)
    const {setAge} = useContext(NewFormContext)
    const {setCity} = useContext(NewFormContext)
    const {setPhno} = useContext(NewFormContext)
    const {setShow} = useContext(NewFormContext)
    
    return (
        <div >
            <div style={{border: '1px solid black', width: 320, marginLeft: 350, marginTop: 80, height: 500}}>
                <form noValidate autoComplete="off" style={{marginTop: 20, marginLeft: 45}}>
                    <TextField id="outlined-basic"  name='name' label="Name" variant="outlined" 
                    onChange={(event) => {
                        setName(event.target.value)
                    }}/>
                    
                    <TextField id="outlined-basic" name='age' label="Age" variant="outlined" style={{marginTop: 20}} 
                    onChange={(event) => {
                        setAge(event.target.value)
                    }}/>
                    
                    <TextField id="outlined-basic"  name='city' label="City" variant="outlined" style={{marginTop: 20}} 
                    onChange={(event) => {
                        setCity(event.target.value)
                    }}/>
                    
                    <TextField id="outlined-basic"  name='phno' label="Phone Number" variant="outlined" style={{marginTop: 20}} 
                    onChange={(event) => {
                        setPhno(event.target.value)
                    }}/>
                    <Button variant="contained" style={{margin: 'inherit'}} type='submit'
                    onClick={(e) => 
                    {
                        e.preventDefault()
                        setShow(true)
                        
                    }
                        }> Submit </Button>
                </form>
            </div>
            
        </div>
    )
}
