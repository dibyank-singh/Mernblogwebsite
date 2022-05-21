import mongoose from "mongoose";



const connection = async () => {
    try{

        const URL = process.env.DATABASE ;
    
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log("Woow , Your Database connected Successfully ...")
    }catch(err){
        console.log(`This error is ${err}`)
    }


}

export default connection; 