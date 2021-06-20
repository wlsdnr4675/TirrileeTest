import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../css/useStyles';
import logo from 'webapp/estimatedProgramm/image/logo.png'




const NavBar = () => {
    const classes = useStyles();

    return (<> 
    <AppBar color="default" position='fixed'>
        <Toolbar>
            <Typography variant="h6" className={classes.title} >
                <img src={logo}/>
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>
     </>);
}
 
export default NavBar;