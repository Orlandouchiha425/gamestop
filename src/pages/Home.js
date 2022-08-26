import { useEffect, useState } from "react"
import {getAllGames} from "../../src/utilities/apiRoutes/games-api" 
export default function Home(){
const [data , setData] = useState([])
    // {
    //     title:"",
    //     price:0,
    //     description:'',
    //     genre:'',
    //     platform:'',
    //     }


    const fetchData = async (evt) => {
        // evt.preventDefault()
        try{
            const response = await  getAllGames()
            setData(response)
            console.log(`I am the setData Test ${data.title}`)

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
      data.map((element,index)=>(
        <div>
          <h1>{element.title}</h1>
          <h3>{element.price}</h3>
          <h3>{element.description}</h3>
          <h3>{element.clearance}</h3>
    </div>
      ))
  }
         </>
)
    
   
    

}
