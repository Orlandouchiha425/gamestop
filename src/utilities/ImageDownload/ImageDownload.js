import axios from "axios";

export async function ImageDownload(formData){
    try {
        const response = await axios.get("https://api.cloudinary.com/v1_1/orlandouchiha425/image/upload", formData)
        const url = response.data.secure_url
        console.log(url)
        return url
    }catch(error) {
        console.log(error)
    }
    
}