import {Link, useNavigate} from "react-router-dom"
import { useState } from "react"
export default function NavBar(){
    const [showLogin, setShowLogin] = useState(false)
    return(
        <div>
<nav>
<Link to='/gamestop/login'>Login</Link>
<Link to='/gamestop/signup'>Sign Up</Link>
</nav>
        </div>
    )
}