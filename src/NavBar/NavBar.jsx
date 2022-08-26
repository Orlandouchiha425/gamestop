import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"
export default function NavBar(){
    const [showLogin, setShowLogin] = useState(false)
    return(
        <div>
<nav className="nav">
<Link className="nav-link active" to='/login'>Login</Link>
<Link className="nav-link active" to='/signup'>Sign Up</Link>
<Link className="nav-link active" to='/'>Home</Link>
<Link className="nav-link active" to='/admin'>Admin</Link>
<Link className="nav-link active" to='/clearance'>Clearance</Link>

</nav>
        </div>
    )
}