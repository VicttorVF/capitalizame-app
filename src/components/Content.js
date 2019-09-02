import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Slider from './Slider';
import Card from './Card';

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
}));

let data = JSON.stringify('../initializers/sliderImages.json');

export default function Content(props) {

    const classes = useStyles();
    
    return (
        <main className={classes.content}>
            <Typography variant="h5">
                Proyectos publicados recientemente
            </Typography>
            <Box component="span" display="block" p={1} m={0}/>
            <Slider content = {data} />
            <div>
                <Card titulo = "Muffin Time: The Random Card Game" img = "/img/img4.png" contenido = "Collect cards, trigger traps, and murder muffins in the asdfmovie-themed card game" autor = "Big Potato" autorImg = "/img/prof4.jpg"/>
                <Card titulo = "Reigns: The Council" img = "/img/img5.png" contenido = "A regal asymmetric party game for 3-6 players with bluffs and betrayals, designed by Bruno Faidutti and Hervé Marly." autor = "Nerial" autorImg = "/img/prof5.png" className = "card2"/>
                <Card titulo = "GENKI: Covert Dock for the Nintendo Switch" img = "/img/img6.png" contenido = "A tactical stealth dock hidden inside a portable GaN-charger. We're setting the dock free, so that any television is your playground." autor = "Human Things" autorImg = "/img/prof6.jpg"/>
            </div>
            <Box component="span" display="block" p={1} m={1}/>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
            </Typography>
            
        </main>
    );
}