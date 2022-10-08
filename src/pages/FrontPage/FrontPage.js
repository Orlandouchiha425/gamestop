import { useEffect, useState } from "react"
import {getAllGames} from "../../utilities/apiRoutes/games-api" 
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
{  
data.map((element,index)=>(
        // <p>{element.title}</p> 
        <>
    <div class="card">
    <img  src={`${element.img}.jpg`} classNameName="card-img-top" alt="videoGame" /> 
  <div class="container">
    <h4><b>{element.title}</b></h4> 
    <p>{element.description}</p> 
    <button>add to cart</button>
  </div>
</div>
    {/* <div className="card" style="width: 18rem;">
  <img src={`${element.img}.jpg`} className="card-img-top" alt="videoGame"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
        </>
         
    ))
}
</>
      )
    }



        




      
      
  

 

  return data && data.title? loading(): loaded();

}


//   <>
//   {
  
//   data.map((element,style)=>(
//   <div classNameName="card" style="width: 18rem;">
//   <img src={`${element.img}.jpg`} classNameName="card-img-top" alt="..." />

//   <div classNameName="card-body">
//     <h5 classNameName="card-title">Card title</h5>
//     <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" classNameName="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//   ))
// }
// // </>
// <>
// {data ?  
// <>
// {

// data.map((element,index)=>(
// <div classNameNameName="card" style="width: 18rem;">
// <img  src={`${element.img}.jpg`}classNameNameName="card-img-top" alt="videoGame"/>
// <div classNameNameName="card-body">
// <h5 classNameNameName="card-title">{element.title}</h5>
// <p classNameNameName="card-text">{element.description}</p>

// <a href="#" classNameNameName="btn btn-primary">Add to cart</a>
// </div>
// </div>

// ))
// }

// </>
// :
// <h1>loading ....</h1>
// }
// </>

//  )
// }









