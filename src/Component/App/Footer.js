import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
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
function Footer() {
    return (
        <div>
            
        </div>
    )
}

export default Footer
