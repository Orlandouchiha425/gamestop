import { useState,useEffect } from "react";
import {getClearanceGames} from "../../utilities/apiRoutes/games-api" 
export default function Clearance(){

    const [data, setData]=useState(null)

    const getAllClearanceGames = async() =>{
        
        try {
            const response = await getClearanceGames()
        setData(response)
            
        } catch (error) {
            console.log(error.message)
        }
    }
function doNothing() {
    return "There are no games on clearance, try again later"
}

    useEffect(() => {
        getAllClearanceGames()
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
                            <h3>{element.description}</h3>
                            <h3>{element.clearance}</h3>
                      </div>
                        ))
                    }
                           </>
                        : 
                        
                    <h1>{doNothing}</h1>
                        }

            </>   
            )

          
                
}