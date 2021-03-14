import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
//
const useStyles = makeStyles((theme)=> ({
    root : {
        minHeight: '10vh',
        fontFamily: 'Nunito',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        background: "rgba(0,0,0,0.5)",
        // [theme.breakpoints.down("md")]:{
        //     flexDirection: "column"
        // }
    },
    text: {
        color: "#fff"
    },
    con: {
        color: "#5aff3d",
        textDecoration: "none",
    }

}
))
function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <Typography variant="p" className={classes.text}>
                The captaion House <a className={classes.con} href="https://github.com/jim-2000">Developer</a>
            </Typography>
        </div>
    )
}

export default Footer;
