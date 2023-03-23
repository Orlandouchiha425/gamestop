import {deleteMessages} from "../../utilities/apiRoutes/messages-api"
import { useNavigate } from "react-router-dom"

import { useParams } from "react-router-dom"
export default function DeleteReview() {
    let {id} = useParams()

    // const navigate = useNavigate()

    const handleDelete =async()=>{
        try {
            await deleteMessages(id._id)
          
        } catch (error) {
            console.log(error)
        }
    
    }
    


    return (
        <button onClick={handleDelete}>Delete Game</button>

    )
}



