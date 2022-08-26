import { uploadImage } from "../../utilities/ImageUpload/ImageUpload"
import { useState,useEffect } from "react"
// import { Image } from "cloudinary-react"
// import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils"
export default function ImageUploads(placeholder){
    const [files, setFiles ]= useState([])
    const [upload , setUpload] =useState({img: ''})
const uploadFunc = async () =>{
        // console.log(image)
    const formData =new FormData();
    formData.append('file', files[0])
    formData.append("upload_preset", "a6gubdd9")
    const response =await uploadImage(formData)
console.log(response)
setUpload({ img: response})
// setImage(response)
    }

    const handleFiles = (event) =>{
        setFiles(event.target.files)
    }

    const doNothing = () =>{
        return;
    }

    useEffect(() =>{}, [setUpload])
    
    return(
<div>
    {/* {
        image ?
        doNothing
        : */}
        {/* <img  alt= {placeholder} height="100px" width="100px"/> */}
    {/* } */}
    <form > 
        <div>
           <label>
                <input type="file" name="img" onChange={handleFiles}></input>
            </label>
        </div>
        <button type="button" onClick={uploadFunc}>{upload.img ? "Image Uploaded":"Upload Image" }</button>
</form>
</div>

      )
}