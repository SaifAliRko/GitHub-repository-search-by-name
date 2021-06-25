import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Profile() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root} style={{marginTop:0 ,marginBottom:40}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography id="saif" gutterBottom variant="h5" component="h2">
            Saif Ali
          </Typography>
          <Typography id="SaifAliRko" gutterBottom variant="h5" component="h3" color="textSecondary">    
            SaifAliRko
          </Typography>
          <Typography variant="body2"  component="p">
          Student of Masters of Electrical Engineering and IT , interested in Web development with experience of developing projects in Python .
          </Typography>
       
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button id="followers" size="small" color="primary">
          1 follower . 1 following 
        </Button>
        
      </CardActions>
      <CardActions>
        <Button id="location" size="small" color="primary">
         Deggendorf, Germany
        </Button>
        
      </CardActions>
    </Card>
  );
}