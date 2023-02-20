import { useState, useEffect } from "react";
import {getAllGames} from "../../utilities/apiRoutes/games-api" 
import './SearchBar.css'
export default function SearchBar() {
    const [data, setData] =useState([])
const [searchText, setSearchText] = useState('') 
const [searchResults, setSearchResults] =useState([])   // const [filterdata, serFilterData] =useState([])


const handleInputChange = event => {
    setSearchText(event.target.value);
  }
  
  const fetchData = async () => {
    try{
        const response = await getAllGames()
        setData(response)


    }catch(err){
        console.log(err)
    }
} 

const handleSearch = (searchText) => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredData);
  };
  
  

    // const fetchData = async (evt) => {
    //     try{
    //         const response = await  getAllGames()
    //         setData(response)

    //     }catch(err){
    //         console.log(err)
    //     }
    // } 

    // const handleFilter=(evt)=>{
    //     setData({...data, [evt.target.name]:evt.target.value})
    // }

    useEffect(() => {
        fetchData()      
    },[])

    return( <div >
        <input type="text" value={searchText} onChange={handleInputChange} placeholder="Search games, Consoles & more"  className="searchBar"  />
         <button onClick={handleSearch}>search</button>
         {searchResults.map(result => (
      <div key={result.id}>{result.title}</div>
    ))}
  
    </div>)
}

