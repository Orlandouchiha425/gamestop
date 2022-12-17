import {editGames} from "../../../utilities/apiRoutes/games-api"
import { useState,useEffect  } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { platForm, genre } from "../../../utilities/list-items/list-items"
export default function EditPage({gameProps ,setUser}) {
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

    let {id} = useParams()

    const navigate = useNavigate()
    const handleSubmit =async()=>{
      try{
        await editGames(id)
        navigate('/')
      }
      catch(error){
        console.log(error)
      }
    }

    // const handleSubmit=async()=>{
    //     try{
    //         editGames({id})

    //         navigate('/')
    //     }
    //     catch(error){
    //         setData({error: "Unable To Edit, check the Form"})
    //     }
    // }


    const handleChange= async(event) => {
        setData({...data, [event.target.name]: event.target.value})
      }


      
    return (
<form onSubmit={handleSubmit}>

    <h1 defaultValue={gameProps}>This is the EDIT PAGE {gameProps.title} </h1>
  


</form>    
)
    
}

