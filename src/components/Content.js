import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class Content extends Component {
    constructor(props){
        super(props);
        this.useStyles = this.useStyles.bind(this);
    }

    classes = makeStyles(theme => ({
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
        }
    ));
    
    render() {
        return (
            <main className={classes.content}>
            <div className={classes.toolbar} />
                <Typography paragraph></Typography>
            </main>
        );
    }
}