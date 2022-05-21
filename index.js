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
  // List of all the files that should be served as-is
  
  let protect = ['transformed.js', 'main.css', 'favicon.ico']
  app.get("*", (req, res) => {

  let path = req.params['0'].substring(1)

  if (protect.includes(path)) {
    // Return the actual file
    res.sendFile(`${__dirname}client/build/${path}`);
  } else {
    // Otherwise, redirect to /build/index.html
    res.sendFile(`${__dirname}client/build/index.html`);
  }
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
