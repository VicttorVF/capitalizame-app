import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { lightBlue } from '@material-ui/core/colors';

import Divider from '@material-ui/core/Divider';
import ProgressBar from './ProgressBar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    display: 'inline-block',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: lightBlue[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  if (props.className == null){
    return (
        <Card className={classes.card}>
    
            <CardMedia
              className={classes.media}
              image={props.img}
              title={props.titulo}
            >
                <ProgressBar value="50"/>
            </CardMedia>
    
          <CardContent>
            <Box component="span" display="block" p={1} m={0} bgcolor="background.paper"/>
            <Typography variant="h6" component="a" href="/" gutterBottom>
                {props.titulo}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.contenido}
            </Typography>
          </CardContent>
          <Divider />
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.bigAvatar}
              src={props.autorImg}
              />
            }
            title="Posted by"
            subheader={props.autor}
          />
    
        </Card>
      );
  } else {
    return (
        <Card className={classes.card + ' ' + props.className}>
    
    <CardMedia
              className={classes.media}
              image={props.img}
              title={props.titulo}
            >
                <ProgressBar value="50"/>
            </CardMedia>
    
          <CardContent>
            <Box component="span" display="block" p={1} m={0} bgcolor="background.paper"/>
            <Typography variant="h6" component="a" href="/" gutterBottom>
                {props.titulo}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.contenido}
            </Typography>
          </CardContent>
          <Divider />
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.bigAvatar}
              src={props.autorImg}
              />
            }
            title="Posted by"
            subheader={props.autor}
          />
    
        </Card>
      );
  }

}
