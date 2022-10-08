import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"
export default function NavBar(){
    const [showLogin, setShowLogin] = useState(false)
    return(
        <div>
<nav className="nav">
<h3>GameStop</h3><input type="text" placeholder="Search.."/>
<Link className="nav-link active" to='/signup'>Sign Up</Link>
<Link className="nav-link active" to='/'>Home</Link>
<Link className="nav-link active" to='/admin'>Admin</Link>
<Link className="nav-link active" to='/clearance'>Clearance</Link>
<Link className="nav-link active" to='/login'><i className="fa-solid fa-user account"></i></Link>
<Link className="nav-link active" to='/cart'><i className="fa-solid fa-cart-shopping account"></i></Link>

</nav>
        </div>
    )
}