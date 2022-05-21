import { Grid, Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

import React from 'react'
const useStyle=makeStyles({
container:{
    padding:10,
    marginTop:30,
},
 connectus:{
   fontSize:16,
   fontWeight:600,
 },
item:{
    marginTop:15,
    textDecoration:"none",
    fontWeight:400,
},

})

const Connectus = () => {
    const classes=useStyle();
    return (
        <Grid container className={classes.container}>
            <Grid item >
                <Box className={classes.connectus} borderBottom={1}>Connect Us On</Box>
                <Box className={classes.item}>
                    <Link href="https://www.linkedin.com/in/dibyank-singh55" color='inherit'>
                        Facebook< FacebookIcon/>
                    </Link>
                </Box>
                <Box className={classes.item}>
                    <Link href="https://www.linkedin.com/in/dibyank-singh55" color='inherit'>
                        Twitter< TwitterIcon/>
                    </Link>
                </Box>
                <Box className={classes.item}>
                    <Link href="https://www.linkedin.com/in/dibyank-singh55" color='inherit'>
                        LinkedIn<LinkedInIcon/>
                    </Link>
                </Box>
                <Box className={classes.item}>
                    <Link href="https://youtube.com/channel/UCgZ7ipbbZtTLijRtHOijyPg" color='inherit'>

                     YouTube<YouTubeIcon className={classes.icons}/> 
                    </Link>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Connectus;