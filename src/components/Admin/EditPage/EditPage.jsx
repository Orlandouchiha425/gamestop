import {editGames} from "../../../utilities/apiRoutes/games-api"
import { useState,useEffect  } from "react"
import { useParams,useNavigate } from "react-router-dom"
// import * as gamesAPI from "../../../utilities/apiRoutes/games-api"
export default function EditPage({gameProps,setGameProps, setUser}) {
   const [data ,setData]=useState({})

    let {id} = useParams()

    const navigate = useNavigate()

    const handleSubmit =async (evt)=>{
      try{
         const response = await editGames(id)
       setData(response)

       
      }
      catch(error){
        console.log(error)
      }
    }

   
useEffect(() =>{
handleSubmit()
},[])

    const handleChange= async(event) => {
        setData({...data, [event.target.name]: event.target.value})
      }


      // console.log(`Hi this is props${gameProps, setGameProps}`)
    return (
<form onSubmit={handleSubmit}  >
  <h6>this is the edit page</h6>
<div className="form-group">
    <label >Game Title</label>
    <input type="text" name="title" className="form-control" id="exampleFormControlInput1" required="true" defaultValue={data.title} onChange={handleChange}></input>
  </div>

   {/* url: <input name='img' type='text' onChange={handleChange}/> <br/> */}
  {/* <div className="form-group">
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
    
  </div> */}
  
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Descripton</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" required={true} onChange={handleChange}  defaultValue={data.descripton}></textarea>
  </div>
  <div className="form-group">
    <label type="text">Price</label>
    <input className="form-control" type="number" id="exampleFormControlSelect1" required={true} name="price" defaultValue={data.price} onChange={handleChange}>
  {/* { prices.map((result,idx) => (
    <option value={result.value} key={idx}>{result.label}</option>
  ))} */}
      
      
    </input>
    {/* <div className="form-group">
    <label >Clearance</label>
    <input type="text" name="clearance" className="form-control" id="exampleFormControlInput1" required="true" placeholder="clearance" value={setData.clearance} onChange={handleChange}/> */}
  {/* </div> */}
 
 
  <fieldset>   <br></br>  <button type="submit" className="btn btn-primary">Submit</button>
</fieldset>
    
    <p className="successful-message">&nbsp;{data.successful}</p> 
  </div>
</form>    
)
    
}