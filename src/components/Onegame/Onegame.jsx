import { useState, useEffect } from "react"
import {findOnegameById } from "../../utilities/apiRoutes/games-api"
import { useNavigate , useParams, Link } from "react-router-dom"
import DeleteGame from "../Admin/DeletGame/DeleteGame"
import MessageForm from "../Reviews/MessageForm"
import Reviews from "../Reviews/Reviews"
export default function Onegame({setUser, user,gameProps, setGameProps, handleAddToOrder}) {
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



const capitalizeFirstCharacter=(title)=>{
   let arr = title.split(' ')
   for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1)
    
   }
  let  str2 = arr.join(' ')
   return str2
   
}


useEffect (() =>{
    getOneGameOnly()
},[])



const loaded = () =>{
    return(
    	<div>
	    	<img src={`${data.games.img}.jpg`} height="500px" width="500px"  />
	        <h1>{capitalizeFirstCharacter(data.games.title)}</h1>
	        <h3>{data.games.price}$</h3> 
	        <h5>this is just a test2 {data.games._id}</h5>  

        <DeleteGame/>
       <Link to={`/games/${data.games._id}`} gameProps={gameProps} setGameProps={setGameProps}>Edit Game</Link>

       <button onClick={()=> handleAddToOrder()}>Add to Order</button>
       <MessageForm />
       <Reviews setUser={setUser} user={user}/>
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