import {editGames} from "../../utilities/apiRoutes/games-api"
import { useNavigate } from "react-router-dom"

import { useParams } from "react-router-dom"
export default function EditGame() {
    let {id} = useParams()

    const navigate = useNavigate()

    const handleEdit=async()=>{
        try {
            await editGames(id)
           
    
    
        } catch (error) {
            console.log(error)
        }
    
    }
    


    return (
        <button className =" editGame" onClick={handleEdit}>Edit</button>

    )
}

