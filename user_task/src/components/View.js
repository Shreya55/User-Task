import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

export const View = ({name, age, city, phno, show, clickToToggle, clickToUpdate}) => {
    
    return (
        <div>
            <Card  variant="outlined" >
                <CardContent >
                    <Typography  color="textSecondary" gutterBottom style={{fontSize: 9}}>
                    <h1> Name: {name} </h1>
                    <h1> Age: {age} </h1>
                    <h1> City: {city} </h1>
                    <h1> Phno: {phno} </h1>
                    </Typography>
                </CardContent>
                <Button
                    variant="contained"
                    style={{ margin: "inherit" }}
                    type="submit"
                    onClick={clickToToggle}
                >
                    Toggle
                </Button>
            </Card>
        </div>
    )
}
