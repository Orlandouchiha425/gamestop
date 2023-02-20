import { useState, useEffect } from "react";
import {getAllGames} from "../../utilities/apiRoutes/games-api" 
import './SearchBar.css'
export default function SearchBar() {
    const [data , setData] = useState([])
    // const [filterdata, serFilterData] =useState([])

    const fetchData = async (evt) => {
        try{
            const response = await  getAllGames()
            setData(response)

        }catch(err){
            console.log(err)
        }
    } 

    const handleFilter=(evt)=>{
        setData({...data, [evt.target.name]:evt.target.value})
    }

    useEffect(() => {
        fetchData()
        
    },[])

    return( <form >
        <input type="text" placeholder="Search games, Consoles & more"  className="searchBar"  />
      {/* <p><input type="checkbox"/>
      {' '}
      Only Show Games Available
      </p> */}
    </form>)
}