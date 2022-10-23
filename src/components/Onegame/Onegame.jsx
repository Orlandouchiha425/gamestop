import { useState, useEffect } from "react"
import {findOnegameById} from "../../utilities/apiRoutes/games-api"

import { useParams } from "react-router-dom"
export default function Onegame() {


    const [data, setData] = useState(null)
    let {id} = useParams()
const getOneGameOnly  = async() => {
    try{
        const response = await findOnegameById(id)
        setData(response)
    } catch (error){
        console.log(error)
    }
}



function doNothing() {
    return 
} 

useEffect (() =>{
    getOneGameOnly()
},[])


return(
      <>
    {data ?  
    <>
        {
            data.map((element,index)=>(
              <div>
                <h1>{element.title}</h1>
                <h3>{element.price}</h3>
              
                
          </div>
            ))
        }
               </>
            : 
            
     doNothing()
            }

</>   
)
}
//     <>
//     {data ?  
//     <>
//         {
//             <h1>{data.title}</h1>
//         //     data.map((element,index)=>(
//         //       <div>
//         //         <h1>{element.title}</h1>
//         //         <h3>{element.price}</h3>
              
                
//         //   </div>
//         //     ))
//         }
//                </>
//             : 
            
//         <h1>{doNothing}</h1>
//             }

// </>   
