import {editGames} from "../../../utilities/apiRoutes/games-api"
import { useState,useEffect  } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { platForm, genre } from "../../../utilities/list-items/list-items"
import * as gamesAPI from "../../../utilities/apiRoutes/games-api"
export default function EditPage({gameProps,setGameProps, setUser}) {
   const [data,setData]=useState(null)

    let {id} = useParams()

    const navigate = useNavigate()

    const handleSubmit =async(evt)=>{
   
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
handleChange()
},[])

    const handleChange= async(event) => {
        setData({...data, [event.target.name]: event.target.value})
      }


      // console.log(`Hi this is props${gameProps, setGameProps}`)
    return (
<form onSubmit={handleSubmit}  >
    <input type='text' name='title'required="true" value={setData.title} onChange={handleChange} ><h1>{setData.title}</h1></input>
<button type="submit">Submit</button>
</form>    
)
    
}

