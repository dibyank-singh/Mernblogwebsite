import React,{useState , useEffect} from 'react'
import Post from './Post'
import {Grid } from '@material-ui/core'
import {Link , useLocation} from "react-router-dom"
import {getpostdata} from "../APIService/Api.js"

const Posts = () => {
    // let posts=[1,2,3,4,5,6,7,8,9,10]
    const {search} = useLocation();

    const [data , setData]=useState([])

    useEffect(() => {
     
      const fetchdata= async()=>{
        const results =  await getpostdata(search);
        console.log(results)
        setData(results)
      }
      fetchdata();

    }, [search])
    return (
    data.map(post =>(
        <Grid item lg={3} sm={4} xs={12}>
          <Link to={`/postdetails/${post._id}`} style={{textDecoration:"none" , color:"inherit"}}> 
           <Post  post={post}/>
           
            </Link>

        </Grid>
    ))
    )
}
export default Posts;
