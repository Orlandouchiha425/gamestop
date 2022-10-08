import { useEffect, useState } from "react"
import {getAllGames} from "../../utilities/apiRoutes/games-api" 
import { LikeButton } from "../../components/LikeButton/LikeButton";
import {Card} from "react-bootstrap";

// import noImage from "./noimage.png"
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
      <Card.Img variant="top" src={`${element.img}.jpg`} />
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



        




      
      
  

 



