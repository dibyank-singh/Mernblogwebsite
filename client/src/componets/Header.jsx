import { AppBar , Toolbar, Typography, makeStyles } from '@material-ui/core'
import {Link } from "react-router-dom"
import React from 'react'
const useStyles=makeStyles({
    AppComponent :{
        background:"#ffffff",
        color:"black"
    },
    container :{
        // justifyContent:"center",
        "&>*":{
            padding:20
        }
    },
    link :{
        textDecoration:"none",
        color:"inherit"
    }
})
const Header = () => {
    const classes= useStyles();
    return (
        <>
         <AppBar className={classes.AppComponent}>  
             <Toolbar className={classes.container}>
               <Link to="/" className={classes.link}> 
               <Typography  >
                    HOME
                 </Typography> 
                 </Link>
                 <Typography>
                    ABOUT
                 </Typography>
                 <Typography>
                    CONTACT US 
                 </Typography>
                 <Typography>
                    PRIVACY AND POLICY 
                 </Typography>

             </Toolbar> 
         </AppBar>
        </>
    )
}

export default Header;
