import React, { useState, useEffect } from 'react'
import { Box, Button, InputBase, makeStyles, TextareaAutosize } from "@material-ui/core"
import { AddCircle } from '@material-ui/icons'
import { FormControl } from '@material-ui/core'
import postimg from "../../../../Img/pic.jpg"
import { getpostdatabyid ,  updatepostdata } from "../../../APIService/Api.js"
import { useHistory } from 'react-router-dom'

const useStyle = makeStyles(theme => ({
    box: {
        padding: "0 10vw",
        [theme.breakpoints.down("sm")]: {
            padding: "0vw"
        }
    }

    ,
    postimgs: {
        width: "80vw",
        height: "50vh",
        objectFit: "fill",
        [theme.breakpoints.down("sm")]: {
            width: "100vw"
        }
    },
    formcont: {
        display: "flex",
        flexDirection: "row",
        marginTop: "10px"
    },
    textfield: {
        flex: 1,
        margin: "0 40px",
        fontSize: 30
    },
    textarea: {
        width: "100%",
        marginTop: "50px",
        border: "none",
        outline: "none",
        fontSize: 20
    }
}))

const datavalue = {
    title: "",
    description: "",
    picture: "",
    username: "Divyank Singh",
    categories: "All",
    postdate: new Date()
}


const Updatepost = ({ match }) => {
    const classes = useStyle();
    const history= useHistory();

    const [data, setData] = useState(datavalue)

    useEffect(() => {

        const fetchdata = async () => {

            const result = await getpostdatabyid(match.params.id)
            setData(result)

        }
        fetchdata();

    }, [])


    const changehandler = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })

    }
    const updatepost = async()=>{
  
         await updatepostdata(match.params.id , data)
         history.push(`/postdetails/${match.params.id}`);
    }
    return (
        <>
            <Box className={classes.box}>
                <img src={postimg} alt="createimg" className={classes.postimgs} />
                <FormControl className={classes.formcont} >
                    <AddCircle fontSize="large" color="primary" />
                    <InputBase
                        placeholder="Blog Title..."
                        value={data.title}
                        onChange={(e) => changehandler(e)}
                        className={classes.textfield} 
                        name="title"
                        
                        />
                        
                    <Button variant="contained" color="primary"  onClick={()=> updatepost()}>Update</Button>
                </FormControl>

                <TextareaAutosize
                    rowsMin={10}
                    placeholder="Write your Post..."
                    className={classes.textarea}
                    value={data.description}
                    onChange={(e) => changehandler(e)}
                    name="description"

                />

            </Box>
        </>
    )
}

export default Updatepost;