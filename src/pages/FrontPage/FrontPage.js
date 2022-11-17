import { useEffect, useState } from "react"
import {getAllGames} from "../../utilities/apiRoutes/games-api" 
import { LikeButton } from "../../components/LikeButton/LikeButton";
import {Card} from "react-bootstrap";
import { useParams } from "react-router-dom"

// import noImage from "./noimage.png"
export default function AllGames({gameProps}){
const [data , setData] = useState([])


    const fetchData = async (evt) => {
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


 

    const loading=()=>{
        return <h1>No games to Display</h1>
    }





    const loaded=()=>{
      return(
        <>

<div className="cardflex container row col-sm" >
{  
data.map((element,index)=>(
       
        <>
       
<Card  style={{ width: '18rem' }}>
      <a href={`/${element._id}`} ><Card.Img variant="top" src={`${element.img}.jpg`} /></a>
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text className="short ">
          {element.description}
        </Card.Text>
      </Card.Body>
      <strong><em><p>Price: {element.price}</p></em> </strong>
    <LikeButton /> 
    </Card>


        </>
         
    ))
}
</div>

</>
      )
    }
    return data && data.title? loading(): loaded();

  }



        




      
      
  

 



