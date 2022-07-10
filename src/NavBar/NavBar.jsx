import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"
export default function NavBar(){
    const [showLogin, setShowLogin] = useState(false)
    return(
        <div>
<nav>
<Link to='/login'>Login</Link>
<Link to='/signup'>Sign Up</Link>
<Link to='/'>Home</Link>
</nav>
        </div>
    )
}