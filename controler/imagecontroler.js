const url='http://localhost:8000'

export const uploadfileimg=(request , response)=>{

    try{
    if(!request.file)
        return response.status(404).json("File not found");

        const imageURL=`${url}/file/${request.file.filename}`
        response.status(200).json(imageURL)
    }catch(err){
     response.status(500).json(("error while while uploading img-imgcomtroler", err))
    }
}