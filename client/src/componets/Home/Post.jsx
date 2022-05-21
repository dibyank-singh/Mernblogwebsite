import React from 'react'
import {Box , Typography , makeStyles } from "@material-ui/core"
import imagepost from "../../Img/post.jpg.jpg"

const useStyle =makeStyles({
    container:{
        height:340,
        margin:"14px",
        borderRadius:"12px",
        border:"1px solid #d3cede",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        // width:"70%",
        "& >*" : {
            padding: "0 5px 5px 5px"
        }
        
    },
    image:{
        height:"100%",
        width:"100%",
        objectFit:"cover",
        borderRadius:"7px",
       
    },
    text:{
       color:"#878787",
       fontSize:13,
    },
    heading :{
        fontSize:18,
        fontWeight:600,
        textAlign:"center"

    },
    discription :{
        fontSize:14,
        wordBreak:"break-word",
        textAlign:"center",
        // overflow:"ellipsis"
        // whiteSpace:"normal"
    }

})

const Post = ({post}) => {
    const classes=useStyle();
    return (
       <>
      <Box className={classes.container}>
         <img src={post.pictures || imagepost} alt="post image " className={classes.image} /> 
         <Typography className={classes.text}>{post.categories}</Typography>
         <Typography className={classes.heading}>{post.title}</Typography>
         <Typography className={classes.text}>Author : {post.username}</Typography>
         <Typography className={classes.discription}> {post.description}</Typography>
      </Box>
       </>
    )
}

export default Post;
