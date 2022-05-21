import React,{useState , useEffect} from 'react'
import {Box , makeStyles, Typography} from "@material-ui/core"
import { Delete, Edit } from '@material-ui/icons';
import {Link , useHistory} from "react-router-dom"
import postimg from "../../../Img/pic3.jpg"
import {getpostdatabyid , deletepostdata} from "../../APIService/Api.js"

const useStyle=makeStyles((theme)=>({
    box:{
        padding:"0 10vw",
        [theme.breakpoints.down("sm")]:{
          padding:"0vw"
        }
    }

    ,
    postimgs:{
        width:"80vw",
        height:"50vh",
        objectFit:"fill",
        [theme.breakpoints.down("sm")]:{
            width:"100vw"
          }
    }
    ,
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down("sm")]:{
            display:"block"
        }
    },
    editcss:{
        textDecoration:"none",
        color:"inherit"
    }

}))

const PostDetails = ({match}) => {
    const classes=useStyle();
    const history=useHistory();

    const[data , setData]=useState({})

    useEffect(()=>{
    
        const fetchdata=async()=>{
        const result = await getpostdatabyid(match.params.id);
        console.log(result);
        setData(result)
    }
    fetchdata()

    },[])

    const deletepost =async()=>{
      await deletepostdata(data._id)
      history.push("/")


    }
    return (
       <>
       <Box className={classes.box}>
          <img src={data.picture || postimg} alt=" Post Images" className={classes.postimgs}/> 
     
       <Box  className={classes.icons}>
          <Link to={`/updatepost/${data._id}`} className={classes.editcss}> <Edit className={classes.icon} color="primary"/></Link>
           <Delete className={classes.icon} color="error" onClick={(e)=>deletepost()}/>
       </Box>
       <Typography className={classes.heading }>{data.title}</Typography>

      <Box className={classes.subheading}> 
          <Link className={classes.editcss} to={`/?username=${data.username}`}>
          <Typography> Author : <span style={{color:"black" , fontWeight:"400"}}>{data.username}</span></Typography>
          </Link>
          <Typography style={{marginLeft:"auto"}}> {new Date (data.postdate).toDateString()}</Typography>
      </Box>
      
       <Typography>{data.description}</Typography>

       </Box>
       
       </>
    )
}

export default PostDetails;
