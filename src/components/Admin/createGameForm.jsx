import { useState } from "react"
import { Navigate } from "react-router-dom"
import { platForm, genre , prices} from '../../utilities/list-items/list-items'
import ImageUploads from "../Images/ImageUploads"


import { createGames } from "../../utilities/apiRoutes/games-api"
import { useEffect } from "react"
export default function CreateGameForm({setUser}){
const [data, setData]= useState({
title:'',
price:0,
descripton:'',
genre:'',
platform:'',
error:'',
successful:'',
clearance:'',
img:'',


})

const [imageData,  setImageData ] = useState('')
// const navigate = Navigate()
useEffect(() => {
handleChange()
handleSubmit()

},[])


const handleChange= async(event) => {
  setData({...data, [event.target.name]: event.target.value})
}






const handleSubmit = async(evt) => {
  evt.preventDefault()
  try{
    createGames(data)
    setData({successful:"Form Submitted successfully, Do you want to Add another game to the DataBase?"})
    
  }catch(error){
    setData({error : "Something went Wrong please complete the form"})
  }
}





    return(
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label >Game Title</label>
    <input type="text" name="title" className="form-control" id="exampleFormControlInput1" required="true" placeholder="Game Title" value={setData.title} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label >Image Upload</label>
 <button type="button" className="btn btn-secondary" placeholder="Image Upload"><ImageUploads  /></button>

  </div>
 
  <div className="form-group">
    <label type="text">Genre</label>
    <select className="form-control" id="exampleFormControlSelect1" required="true"  name='genre' onChange={handleChange}>
    {genre.map((type, index) => (
                            <option value={type.value} key={index} >{type.label}</option>
                        ))}
    </select>
  </div>
  <div className="form-group">
    <label type="text">Platform</label>
    <select className="form-control" id="exampleFormControlSelect1" required="true" value={setData.platform} name="platform" onChange={handleChange}>
  {platForm.map((type,idx) => (
        <option value={type.value} key={idx}>{type.label}</option>
  ))}
      
    </select>

    
  </div>
  
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Descripton</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" required="true" onChange={handleChange} name="description" value={setData.descripton}></textarea>
  </div>
  <div className="form-group">
    <label type="text">Price</label>
    <select className="form-control" type="number" id="exampleFormControlSelect1" required="true" name="price" value={setData.price} onChange={handleChange}>
  { prices.map((result,idx) => (
    <option value={result.value} key={idx}>{result.label}</option>
  ))}
      
      
    </select>
    <div className="form-group">
    <label >Clearance</label>
    <input type="text" name="clearance" className="form-control" id="exampleFormControlInput1" required="true" placeholder="clearance" value={setData.clearance} onChange={handleChange}/>
  </div>
 
 
<fieldset>   <br></br>  <button type="button" className="btn btn-primary">Submit</button>
</fieldset>
    
    <p className="successful-message">&nbsp;{data.successful}</p> 
  </div>


</form>    
)
    


}