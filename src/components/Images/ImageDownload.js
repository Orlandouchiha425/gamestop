import { useState,useEffect } from "react";
// import { Image } from "cloudinary-react";
import ImageUploads from "./ImageUploads";

export default function ImageDownloader() {
    const [error, setError ]= useState('')
    const [data, setData] = useState('')


    const downloadFunct = async () => {
            
            try{
                const response =await ImageUploads(data)
            //  const response = await imageDownload(download);
                 setData(response)
                 console.log(response)
        
        }
        catch{console.log(setError('Someting Wrong, please try again'))}
    }


    useEffect(() => {
        downloadFunct()
    },[])
    // useEffect(() =>{}, [setUpload])

 

        
    return (

        <>
        {
            
        setData.map((element,index)=>(
            
              <div>
               <img src>{element.img} </img> 
               
          </div>
            ))
        }
               </>
    )
}