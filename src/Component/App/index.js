import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=> ({
root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "asset/iland.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

}
}))
function Index() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
          
        </div>
    )
}

export default Index;
