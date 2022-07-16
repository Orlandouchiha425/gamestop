import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LoginForm/LoginForm";
import { useState } from "react";
import { getUser } from "../utilities/users/users-service";

export default function AuthPage({setUser}){
    const [showLogin, setShowLogin] = useState(getUser())

    return (
    <main>
        <h1>AuthPage</h1>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin? 'Sign up': 'Log in'}</h3>
        <button> </button>
        
    </main>)
}