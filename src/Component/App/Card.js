import React, { useEffect ,useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from './Data'

//
const useStyles = makeStyles((theme)=> ({
    root : {
        minHeight: '100vh',
        fontFamily: 'Nunito',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },

}
))

function CardXoss() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
           <ImageCard           
           place={places[1]}
           />
            <ImageCard           
           place={places[0]}
           />
        </div>
    )
}

export default CardXoss
