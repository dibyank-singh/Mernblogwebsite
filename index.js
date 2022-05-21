import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config()
import express from "express"
import connection from "./database/DB.js"
import Router from "./route/route.js";
import cors from "cors"
import bodyParser  from "body-parser";
import path from "path";

  
const app=express(); 
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true})) 

const PORT= process.env.PORT || 8000 ;

const __dirname= path.resolve()

app.use( Router); 
if(process.env.NODE_ENV ==="production"){ 
    app.use(express.static(path.join(__dirname ,"/client/build")))
    app.get("*", (req, res) => {
        let url = path.join(__dirname, '/client/build', 'index.html');
        if (!url.startsWith('/app/')) // since we're on local windows
          url = url.substring(1);
        res.sendFile(url);
      });
    // app.get("*",(req,res)=>{
    //     res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    // })
} else {
    app.get("/",(req , res)=>{
        res.send("api server is running test ")
    })
}


app.listen( PORT , ()=> console.log(`Server is runnning at ${PORT}`) )
connection(); 
