import { Card, CardContent,Typography, CardActions,Button } from "@mui/material";
import { CustomCardProps } from "../@types/props";
import React from 'react'

const CustomCard :React.FC<CustomCardProps> = ({description,name,handleDelete,handleEdit}) => {
    return(
        <React.Fragment>
        <Typography>Todo List</Typography>
        <Card sx={{mt: 5, minWidth: 275}}>
            
            <CardContent>
                <Typography component={"h1"}>{name}</Typography>
                <Typography component={"p"} sx={{pt : 3}}>{description}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={() => handleEdit?.()}>Edit</Button>
                <Button variant="outlined" onClick={() => handleDelete?.()}>Delete</Button>
            </CardActions>
        </Card>
        </React.Fragment>
    ) 
}
export default CustomCard;