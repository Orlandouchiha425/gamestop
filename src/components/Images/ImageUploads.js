import axios from "axios";
import { useState } from "react";
export default function ImageUploadNew() {
    const [images, setImages] = useState([])
    const [imageToRemove, setImageToRemove] = useState(null)
    function handleOpenWidget() {
  var myWidget = window.cloudinary.createUploadWidget({
    cloudName: 'orlandouchiha425', 
    uploadPreset: 'a6gubdd9'}, 
    
    (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        setImages((prev) => [...prev, {url: result.info.url, public_id: result.info.public_id}])
      }
    }
  )
  myWidget.open()
}


function hanndleRemoveImg(imgObj) {
    setImageToRemove(imgObj.public_id);
    axios.delete(`http://localhost:3001${imgObj.public_id}`)
    .then(() =>{
        setImageToRemove(null);
        setImages((prev) => prev.filter((img) =>img.public_id))
    }).catch((e) =>console.log(e))
}

return(
    <>
    
    <div>
        <button id="upload-widget" className="cloudinary-button" onClick={() => handleOpenWidget()}>Upload Pictures</button>
    </div>
    <div className="images-preview-container">
    {images.map((image)=>(
        <div className="image-preview">
            <img src={image.url}/>
            {imageToRemove != image.public_id && <i className="fa fa-times-circle close-icon" onClick={() => hanndleRemoveImg(image)}></i>}
            
        </div>
    ))}
    </div>
  
    </>
)
}



// import { uploadImage } from "../../utilities/ImageUpload/ImageUpload"
// import { useState,useEffect } from "react"
// // import { Image } from "cloudinary-react"
// // import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils"
// export default function ImageUploads(placeholder){
//     const [files, setFiles ]= useState([])
//     const [upload , setUpload] =useState({img: ''})
// const uploadFunc = async () =>{
//         // console.log(image)
//     const formData =new FormData();
//     formData.append('file', files[0])
//     formData.append("upload_preset", "a6gubdd9")
//     const response =await uploadImage(formData)
// console.log(response)
// setUpload({ img: response})
// // setImage(response)
//     }

//     const handleFiles = (event) =>{
//         setFiles(event.target.files)
//     }

//     const doNothing = () =>{
//         return;
//     }

//     useEffect(() =>{}, [setUpload])
    
//     return(
// <div>
//     {/* {
//         image ?
//         doNothing
//         : */}
//         {/* <img  alt= {placeholder} height="100px" width="100px"/> */}
//     {/* } */}
//     <form > 
//         <div>
//            <label>
//                 <input type="file" name="img" onChange={handleFiles}></input>
//             </label>
//         </div>
//         <button type="button" onClick={uploadFunc}>{upload.img ? "Image Uploaded":"Upload Image" }</button>
// </form>
// </div>

//       )
// }