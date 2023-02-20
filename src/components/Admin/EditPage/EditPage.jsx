import {editGames} from "../../../utilities/apiRoutes/games-api"
import { useState,useEffect  } from "react"
import { useParams,useNavigate } from "react-router-dom"
export default function EditPage({gameProps,setGameProps, setUser}) {
   const [data ,setData]=useState({})

    let {id} = useParams()

    const navigate = useNavigate()

    const handleSubmit =async (evt)=>{
      evt.preventDefault()
      try{
        const editgame = {...data}
         const response = await editGames(id, editgame)
       navigate(`/${response._id}`)

       
      }
      catch(error){
        console.log({error:"failed to update"})
      }
    }

   
useEffect(() =>{
handleSubmit()
},[])

    const handleChange= async(event) => {
        setData({...data, [event.target.name]: event.target.value})
      }


    return (
<form onSubmit={handleSubmit}  >
  <h6>this is the edit page</h6>
<div className="form-group">
    <label >Game Title</label>
    <input type="text" name="title" className="form-control" id="exampleFormControlInput1" required="true" defaultValue={data.title} onChange={handleChange}></input>
  </div>

  
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Descripton</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" required={true} onChange={handleChange}  defaultValue={data.descripton}></textarea>
  </div>
  <div className="form-group">
    <label type="text">Price</label>
    <input className="form-control" type="number" id="exampleFormControlSelect1" required={true} name="price" defaultValue={data.price} onChange={handleChange}>
</input>

 
 
  <fieldset>   <br></br>  <button type="submit" className="btn btn-primary">Submit</button>
</fieldset>
    
    <p className="successful-message">&nbsp;{data.successful}</p> 
  </div>
</form>    
)
    
}
