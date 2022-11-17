import { useState, useEffect } from "react"
import {findOnegameById, deleteGames} from "../../utilities/apiRoutes/games-api"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
export default function Onegame() {
    let {id} = useParams()

    const [data, setData] = useState(null)

    const navigate = useNavigate()
    
const getOneGameOnly  = async() => {
 


    try{
        const response = await findOnegameById(id)
        setData(response)
    } catch (error){
        console.log(error)
    }
}

const handleDelete =async()=>{
    try {
        await deleteGames(id)
        navigate('/')


    } catch (error) {
        console.log(error)
    }

}


useEffect (() =>{
    getOneGameOnly()
},[])



const loaded = () =>{
    return(
    	<div>
	    	<img src={`${data.games.img}.jpg`} height="500px" width="300px"  />
	        <h1>{data.games.title}</h1>
	        <h3>{data.games.price}</h3> 
	        <h5>this is my params {data.games._id}</h5>  
	        <h1>{data.games.title}</h1>  
            <button className =" DeleteGame" onClick={handleDelete}>Delete Game</button>

        

    	</div>
	)
}
const loading = () => {
    return (
        <main className='loading-screen'>
            <h2>loading.... Please Wait for your Awesome Game!</h2>
            <h1>this is ID: {id}</h1>
        </main>
        )
}

return data ? loaded() : loading()

}
// const loaded = () =>{
//     return(
//     	<div>
// 	    	<img src={`${data.games.img}.jpg`} height="500px" width="300px"  />
// 	        <h1>{data.games.title}</h1>
// 	        <h3>{data.games.price}</h3> 
// 	        <h5>this is my params {data.games._id}</h5>  
// 	        <h1>{data.games.title}</h1>  
// 	    	<h1>test</h1>
//     	</div>
// 	)
// }

// const loading = () => {
//     return (
//         <main className='loading-screen'>
//             <h2>loading.... Please Wait for your Awesome Game!</h2>
//             <h1>this is ID: {id}</h1>
//         </main>
//         )
// }

// return data && data._id ? loaded() : loading()
// }

