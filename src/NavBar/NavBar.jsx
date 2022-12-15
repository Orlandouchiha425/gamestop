import {Link, useNavigate} from "react-router-dom"
import Menu from "../components/Menu/Menu"
import { useState } from "react"
import {searchBar} from "../components/SearchBar/SearchBar"
import { getUser } from "../utilities/users/users-api"



export default function NavBar({user, setUser}){
 const [data, setData ] =useState(getUser())


 const fetchData = async (evt) => {
    try{
        const response = await  getUser()
        setData(response)
     

    }catch(err){
        console.log(err)
    }
} 



    const LoginNavBar= () =>{
        return(

        <div> 
               

        <nav className="nav styles bg-light">
<Link className="nav-link active" to='/login' ><i className="fa-solid fa-user account"></i></Link>
<Link className="nav-link active" to='/signup'>Sign Up</Link>
</nav>
 </div>
        )

    }

const navBar =()=>{
    return(
        <div> 
            <nav className="nav styles bg-light">


<Menu/>
<Link to='/'><h3>GameStop</h3></Link>
<searchBar />

<Link className="nav-link active" to='/'>Home</Link>
<Link className="nav-link active" to='/admin'>Admin</Link>
<Link className="nav-link active" to='/clearance'>Clearance</Link>
{/* <Link className="nav-link active" to='edit'>Edit</Link> */}
<Link className="nav-link active" to='/cart'><i className="fa-solid fa-cart-shopping account"></i></Link>

<Link to='about'>About Me</Link>
</nav>
        </div>
    )
}

return user ? navBar() : LoginNavBar()
}