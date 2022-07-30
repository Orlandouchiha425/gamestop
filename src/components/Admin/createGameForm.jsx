import { useState } from "react"
import { Navigate } from "react-router-dom"
import { createGames } from "../../utilities/apiRoutes/games-api"
export default function CreateGameForm({setUser}){
const [data, setData]= useState({
title:'',
price:0,
descripton:'',
genre:'',
platform:''
})



const handleChange= async(event) => {
  setData({...data, [event.target.name]: event.target.value})
}


const addData = () =>{
  setData(data.push(data.title))
}


const handleSubmit = async(evt) => {
  evt.preventDefault()
  try{
    createGames(data)
    Navigate('/')
  }catch(error){
    console.log(error)
  }
}



// const loaded =()=>{

    return(
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label >Game Title</label>
    <input type="text" name="title" className="form-control" id="exampleFormControlInput1" placeholder="Game Title" value={setData.title} onChange={handleChange}/>
  </div>
 
  <div className="form-group">
    <label type="text">Genre</label>
    <select className="form-control" id="exampleFormControlSelect1" value={setData.genre} name='genre' onClick={handleChange}>
      <option>Horror</option>
      <option>Sports</option>
      <option>RPG</option>
      <option>Shooting</option>
      <option>Action</option>
    </select>
  </div>
  <div className="form-group">
    <label type="text">Platform</label>
    <select className="form-control" id="exampleFormControlSelect1" value={setData.platform} name="platform" onClick={handleChange}>
      <option>PlayStation 4</option>
      <option>PlayStation 5</option>
      <option>Xbox One</option>
      <option>Nintendo Switch</option>
      <option>Virtual Reality</option>
      
    </select>
  </div>
  
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Descripton</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleChange} name="description" value={setData.descripton}></textarea>
  </div>
  <div className="form-group">
    <label type="text">Price</label>
    <select className="form-control" type="number" id="exampleFormControlSelect1" name="price" value={setData.price} onClick={handleChange}>
      <option>10</option>
      <option>20</option>
      <option>30</option>
      <option>40</option>
      <option>50</option>
      
      
    </select>

    <button type="submit">Submit</button>
  </div>
</form>    
)
    
}

// const loading =()=>{
//     return <h1>Please complete all required fields</h1>
// }
// return 
// }