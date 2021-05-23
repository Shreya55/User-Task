import React, {useContext} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {NewFormContext} from './contexts/NewFormContext'

export const View = () => {

    const {name} = useContext(NewFormContext)
    const {age} = useContext(NewFormContext)
    const {city} = useContext(NewFormContext)
    const {phno} = useContext(NewFormContext)

    var arr=[]
    arr.push(name,age,city,phno)

    return (
        <div>
            <Card  variant="outlined" >
                <CardContent >
                    <Typography  color="textSecondary" gutterBottom style={{fontSize: 9}}>
                    <h1> Name: {arr[0]} </h1>
                    <h1> Age: {arr[1]} </h1>
                    <h1> City: {arr[2]} </h1>
                    <h1> Phno: {arr[3]} </h1>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
