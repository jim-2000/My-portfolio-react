import React, { useEffect ,useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import ShortTextIcon from '@material-ui/icons/ShortText';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Collapse, IconButton, Toolbar,  } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme)=> ({
    root : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
appbar: {
    background: "none",
    fontFamily : "'Nunito', sans-serif;"
},
icon : {
    color: "#fff",
    fontSize: "2rem"
},
appbartitle: {
    flexGrow: "1",
},
appbarWrapper : {
    width: "80%",
    margin: '0 auto',
},
colorTitle: {
    color: "#5aff3d"
},
textWrapper: {
    textAlign: "center",
},
title: {
padding: "10px",
color: "#fff",
fontSize: "4.5rem"
},
goDown: {
    color: "#5aff3d",
    fontSize: "4rem",
    border: "1px solid #5aff3d",
    borderRadius: "50%",
    padding: "5px",
    "&:hover": {
        background: "#5aff3dba",
        color: '#fff'

    }
}


}))

const Header = ()=> {
    const classes = useStyles()
    const [checked, setchecked] = useState(false)

useEffect (()=> {
    setchecked(true)
},[])



    return (
        <div className={classes.root} id="header">
            <AppBar position="fixed" className={classes.appbar}>
             
             <Toolbar className={classes.appbarWrapper}>
             <h1 className={classes.appbartitle}>My<span className={classes.colorTitle}>Island</span> </h1>
                <IconButton>
                    <ShortTextIcon className={classes.icon}/>
                </IconButton> 
            </Toolbar>   
            </AppBar>
           
            <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >

            <div className={classes.textWrapper}>
                <h1 className={classes.title}>Welcome to <br /> My<span className={classes.colorTitle}>Island</span> </h1>

                <Scroll to="place-to-visit" smooth={true}>
                    <IconButton>
                        <ArrowDownwardIcon
                        className={classes.goDown}/>
                    </IconButton>
                </Scroll>
            </div>

            </Collapse>
        </div>
    )
}

export default Header;
