import express, { response } from "express"
import Post from "../schema/postschema.js"
import {uploadfileimg} from "../controler/imagecontroler.js"
import upload from "../utils/upload.js"
const url ='http://localhost:8000' 

const router = express.Router();

// For Sending data to the Mongodb

router.post("/createpost", async (req, res) => {

    try {
        //  console.log(req.body)  

        const post = await new Post(req.body)  
        console.log(post)
        await post.save()
        res.status(200).json("Your data is saved to mongodb successfully .... ")

    } catch (err) {
        res.status(500).json(err)
    }

})

// For getting back the data from the mongodb 

router.get("/postdetails", async (req, res) => {
    let username = req.query.username;
    let categories = req.query.categories; 
    let posts;

    try {
        if (username)
            posts = await Post.find({ username: username })
        else if (categories)
            posts = await Post.find({ categories: categories })
        else
            posts = await Post.find({});
        res.status(200).json(posts)

    } catch (err) {
        res.status(500).json(err)
    }
 

})

// Fetching data to show details blog post by id ... 

router.get("/post/:id", async (req, res) => {

    try {

        let posts = await Post.findById(req.params.id);
        return res.status(200).json(posts)

    } catch (err) {
        res.status(500).json(err)
    }

})

router.post("/updatepost/:id", async (req, res) => {
    try {

        let apdata = await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
        return res.status(200).json(apdata);

    } catch (err) {
        res.status(500).json(err)
    }

})
router.delete("/delete/:id", async (req, res) => {
    try {

        let deletedata = await Post.findById(req.params.id);
        await deletedata.delete();
        return res.status(200).json(apdata);

    } catch (err) {
        res.status(500).json(err)
    }

})

router.post('/file/upload',upload.single('file'),  uploadfileimg)


// router.post("/file/upload",upload.single("file") , async(request , res )=>{
//  try {
//     if(!request.file)
//     return response.status(404).json("file not found ")

//  const imageurl=`${url}/file/${request.file.filename}`
//  console.log(request.file.filename)
//  response.status(200).json(imageurl)
//  } catch (err){ 
//    response.status(500).json("yahin hai",err)  
//  }

// }) 
// // For image post request 

 
export default router;