import {Link, useNavigate} from "react-router-dom"
import Menu from "../components/Menu/Menu"
import { useState } from "react"
import styles from "./NavBar.module.css"
import UserLogOut from "../components/Logout/Logout"


export default function NavBar({user, setUser}){
    const [showLogin, setShowLogin] = useState(false)
    return(
        <div> 
               

<nav className="nav styles bg-light">


<Menu/>
<Link to='/'><h3>GameStop</h3><input type="text" placeholder="Search.."/></Link>
<Link className="nav-link active" to='/signup'>Sign Up</Link>
<Link className="nav-link active" to='/'>Home</Link>
<Link className="nav-link active" to='/admin'>Admin</Link>
<Link className="nav-link active" to='/clearance'>Clearance</Link>
<Link className="nav-link active" to='/login'><i className="fa-solid fa-user account"></i></Link>
<Link className="nav-link active" to='/cart'><i className="fa-solid fa-cart-shopping account"></i></Link>
<Link to='about'>About Me</Link>
</nav>
        </div>
    )
}