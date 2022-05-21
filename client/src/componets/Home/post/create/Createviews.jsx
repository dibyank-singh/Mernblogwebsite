import React,{useState , useEffect} from 'react'
import {Box , Button, InputBase, makeStyles, TextareaAutosize} from "@material-ui/core"
import { AddCircle  } from '@material-ui/icons'
import { FormControl } from '@material-ui/core'
import {createPost , uploadimage} from "../../../APIService/Api"
import { useHistory } from 'react-router-dom'
// uploadimage , will update it later after bug resolve 
import postimg from "../../../../Img/pic.jpg"
const useStyle=makeStyles(theme=>({
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
    },
    formcont:{
        display:"flex",
        flexDirection:"row",
        marginTop:"10px"
    },
    textfield:{
        flex:1,
        margin:"0 40px",
        fontSize:30
    },
    textarea:{
        width:"100%",
        marginTop:"50px",
        border:"none",
        outline:"none",
        fontSize:20
    }
}))
 

const datavalue={
    title:"",
    description:"",
    picture:"",   
    username:"Divyank Singh", 
    categories:"All",
    postdate: new Date()
}


const Createviews = () => {
    const history=useHistory()
    const classes=useStyle();
    
    const [data, setData] = useState(datavalue)
    const [file, setFile] = useState('')

    
    const changehandler= (e)=>{
    
        setData({...data , [e.target.name]:e.target.value})
    
    }
    const postpublish=async()=>{
         await createPost(data);
         history.push("/")
    }

    const imagehandler=(e)=>{
      console.log(e.target.files)
      setFile(e.target.files[0])
    }
      
     useEffect(()=>{

     const imgdata= async()=>{
      if(file){
          console.log(file)
          const data =new FormData();
          data.append("name", file.name);
          console.log(file.name)
          data.append("file",file)
          await uploadimage(data)
        for (const key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        //   console.log(imagedata)
      }  
     }
     imgdata()

     },[file])


    return (
        <>
       <Box className={classes.box}>
           <img src={postimg} alt="createimg" className={classes.postimgs}/>
           <FormControl className={classes.formcont} >
               <label htmlFor="filedata"> 
               <AddCircle 
               fontSize="large"
                color="primary"/>
                </label>
                <input 
                type="file"
                id="filedata"
                style={{display:"none"}}
                onChange={imagehandler}
                
                />
                
               <InputBase
                placeholder="Blog Title..." 
                className={classes.textfield}
                onChange={(e)=> changehandler(e)}
                name="title"
                value={data.title}
                />
               <Button
               onClick={()=> postpublish()}
                variant="contained"
                 color="primary">
                     Post Now
                </Button>
           </FormControl>

           <TextareaAutosize
           rowsMin={10}
           placeholder="Write your Post..."
           className={classes.textarea}
           onChange={(e)=> changehandler(e)}
           name="description"
           value={data.description}
           
           />

       </Box>
        </>
    )
}

export default Createviews;
