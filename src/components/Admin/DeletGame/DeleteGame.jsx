import {deleteGames} from "../../../utilities/apiRoutes/games-api"
import { useNavigate } from "react-router-dom"

import { useParams } from "react-router-dom"
export default function DeleteGame() {
    let {id} = useParams()

    const navigate = useNavigate()

    const handleDelete =async()=>{
        try {
            await deleteGames(id)
            navigate('/')
    
    
        } catch (error) {
            console.log(error)
        }
    
    }
    


    return (
        <button className =" DeleteGame" onClick={handleDelete}>Delete Game</button>

    )
}



