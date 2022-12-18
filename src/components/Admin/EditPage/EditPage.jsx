import {editGames} from "../../../utilities/apiRoutes/games-api"
import { useState,useEffect  } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { platForm, genre } from "../../../utilities/list-items/list-items"
export default function EditPage({gameProps, setUser, data}) {
   

    let {id} = useParams()

    const navigate = useNavigate()
    const handleSubmit =async()=>{
      try{
        await editGames(id)
        navigate('/')
          console.log(data.title)

      }
      catch(error){
        console.log(error)
      }
    }


    // const handleChange= async(event) => {
    //     setData({...data, [event.target.name]: event.target.value})
    //   }


      
    return (
<form onSubmit={handleSubmit}>
    <h1 >This is the EDIT PAGE  </h1>


</form>    
)
    
}

