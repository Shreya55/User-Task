import React, {useContext} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {NewFormContext} from './contexts/NewFormContext'

export const View = (props) => {

    
    return (
        <div>
            <Card  variant="outlined" >
                <CardContent >
                    <Typography  color="textSecondary" gutterBottom style={{fontSize: 9}}>
                
                    <h1> Name: {props.name} </h1>
                    <h1> Age: {props.age} </h1>
                    <h1> City: {props.city} </h1>
                    <h1> Phno: {props.phno} </h1>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
