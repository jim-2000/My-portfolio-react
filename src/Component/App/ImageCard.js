import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.3)",
    margin: "20px"

  },
  media: {
    height: 440,
  },
  title: {
      fontFamily: 'Nunito',
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#fff"
  },
  des: {
      fontFamily: "Nunito",
      fontSize: "1.1rem",
      color: "#ddd",
      
  }
});

export default function ImageCard({place, checked}) {
  const classes = useStyles();
  // const [checked, setchecked] = useState(false)

  // useEffect (()=> {
  //     setchecked(true)
  // },[])

  return (
    <Collapse  in={checked}
    {...(checked ? { timeout: 1000 } : {})}
    collapsedHeight={50}
    
    
    >

  
    <Card className={classes.root}>
     
        <CardMedia
          className={classes.media}
          image={place.imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" className={classes.title}>
           {place.title}
          </Typography>
          <Typography variant="body2" className={classes.des} color="textSecondary" component="p">
            {place.desc}
          </Typography>
        </CardContent>
    
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Collapse>
  );
}
