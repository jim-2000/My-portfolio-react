import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from './Data'
import WindowPosition from '../Hook/WindowPosition';

//
const useStyles = makeStyles((theme)=> ({
    root : {
        minHeight: '100vh',
        fontFamily: 'Nunito',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        [theme.breakpoints.down("md")]:{
            flexDirection: "column"
        }
    },
}
))

function CardXoss() {
    const classes = useStyles()
    const checked = WindowPosition("header")
    return (
        <div className={classes.root} id="place-to-visit">
           <ImageCard           
           place={places[1]}
           checked ={checked}
           />
            <ImageCard           
           place={places[0]}
           checked ={checked}
           />



        </div>
    )
}

export default CardXoss
