import React from 'react'
import {Box , makeStyles, Typography} from "@material-ui/core"
import Image from "../../Img/back2.jpg.jpg"

const useStyle =makeStyles({
  image:{
      background: `url(${Image})center/55% repeat-x #000  `,
    //   center/55% repeat-x #000   `,
    //   backgroundSize:"cover",
    //   backgroundRepeat:"no-repeat",
      width:"100%",
      height:"50vh",
    //   display:"flex",
    //   flexDirection:"column",
    //   alignItems:"center",
    //   justifyContent:"center",
    //  '& :first-child' : {
    //      fontSize :60,
    //      color:"#7979ed"
    //  },
    //  '& :last-child':{
    //      fontSize:40,
    //      color:"#fff"
    //  }

  },boxcont:{
      padding:40,
      // marginTop:80,
      marginLeft:110,
      // border:"2px solid red",
      

  },textstyle:{
    fontSize :25,
    fontWeight:800,
    color:"#fff",
    // textDecoration:"underline"
  },
  textstyles:{
     fontSize:20,
     fontWeight:700,
     color:"#d6d2d2",
    //  textDecoration:"underline",
  }
  

})


const Banner = () => {
    const classes=useStyle();
    return (
        <>
        <Box  className={classes.image}>
            <Box className={classes.boxcont}>
            <Typography  className={classes.textstyle}>Dibyank Singh</Typography>
            <Typography className={classes.textstyles}> Blog Website</Typography>
            </Box>
        </Box>
      
        </>
    )
}

export default Banner;
