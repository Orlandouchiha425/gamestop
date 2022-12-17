import { useState, useEffect } from "react"
import {findOnegameById } from "../../utilities/apiRoutes/games-api"
import { useNavigate , useParams, Link } from "react-router-dom"
import DeleteGame from "../Admin/DeletGame/DeleteGame"
import EditPage from "../Admin/EditPage/EditPage"
export default function Onegame({setUser, gameProps}) {
    let {id} = useParams()
const [data, setData] = useState(null)
    

const navigate= useNavigate()
const getOneGameOnly  = async() => {
    try{
        const response = await findOnegameById(id)
        setData(response)
    } catch (error){
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

        <DeleteGame/>
       <Link to={`/games/${data.games._id}`} gameProps={data}>Edit Game</Link>

      
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


