
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Component/App/Header';
import CardXoss from './Component/App/Card';


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const useStyles = makeStyles((theme)=> ({
root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "asset/iland.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

}
}))
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function App() {
  const classes = useStyles()
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div className="App">
       <div className={classes.root}>
         <CssBaseline />
      <Header /> 
      <CardXoss />
        </div>
    </div>
  );
}

export default App;
