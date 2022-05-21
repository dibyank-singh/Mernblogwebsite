import axios from "axios"

const url ='http://localhost:8000';

export const createPost = async (post) => {
    try {
        // console.log(post)
        return await axios.post(`${url}/createpost`, post);
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}

export const getpostdata= async (param)=>{   
    try{

   let response= await axios.get(`${url}/postdetails${param}`)
   return response.data ;

    }catch(err){
        console.log("Error occured while calling getpostdata api" , err)
    }
}
export const getpostdatabyid= async (id)=>{
    try{

   let responsedata= await axios.get(`${url}/post/${id}`)
   return responsedata.data ;

    }catch(err){
        console.log("Error occured while calling getpostdatabyid api" , err)
    }
}

export const  updatepostdata= async(id , data)=>{
  
    try{
      await axios.post(`${url}/updatepost/${id}`, data)

    }catch(err){
        console.log("Error occured while updating the data of post into mongodb" , err)
    }

}
export const  deletepostdata= async(id)=>{
  
    try{
      await axios.delete(`${url}/delete/${id}`)

    }catch(err){
        console.log("Error occured while deleting the data of post into mongodb" , err)
    }
 
}


export const uploadimage= async(data)=>{

    try{
       return await axios.post(`${url}/file/upload`,data)

    }catch(err){
        console.log("error while uploading the image to MongDB -Upldimg", err)
    }


}