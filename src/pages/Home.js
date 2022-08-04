import { useEffect, useState } from "react"
import {getAllGames} from "../../src/utilities/apiRoutes/games-api" 
export default function Home(){
const [data , setData] = useState()

    const fetchData = async () => {
        try{
            const response = await getAllGames(data)
            setData(response)

        }catch(err){
            console.log(err)
        }
    } 

    useEffect(() => {
        fetchData()
    },[])

    return(
      <>

{
    data.map((item, idx) =>{
        return(
            <div key={idx}>
            <h1>{item.title}</h1>
            <h3>{item.price}</h3>
            </div>
        )
    })

    }
    </>
    )

}