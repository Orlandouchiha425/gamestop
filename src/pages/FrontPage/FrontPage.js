import { useEffect, useState } from "react"
import {getAllGames} from "../../utilities/apiRoutes/games-api" 
import noImage from "./noimage.png"
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

 
  const  doNOthing =()=>{
    return <h1>Loading ....</h1>
    console.log('loading')
    }

 return(
    <>
 {
  
  data.map((element,index)=>(
    <div>
      <h1>{element.title}</h1>

 
</div>
  ))
}
 
 </>
         


       
         
)
    
   
    

}
