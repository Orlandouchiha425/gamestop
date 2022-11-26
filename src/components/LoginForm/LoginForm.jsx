import { useState } from 'react';
import  styles from "./loginForm.module.css"
import * as usersService from '../../utilities/users/users-service';
import SignUpForm from '../SignUpForm/SignUpForm';
import {Link, useNavigate} from "react-router-dom";

 
export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

let navigate = useNavigate()
async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);
    navigate('/')
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div >
     <style>{'body { background: linear-gradient(#141e30, #243b55)}'}</style>
<div className={styles.loginbox } >
  <h2>Login</h2>
  <h5>Need to Sign Up? <Link className="nav-link active" to='/signup'><button><em>Click Here</em></button> </Link></h5>
  <form autoComplete="off" onSubmit={handleSubmit} >
    <div className={styles.userbox}>
    <input type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder='use this email: test@gmail.com'/>      <label>Email</label>
    </div>
    <div className={styles.userbox}>
    <input type="password" name="password" value={credentials.password} onChange={handleChange} required placeholder='use this password: 123456'/>
      <label>Password</label>
    </div>
    <button type='submit'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
</div>
</div>
)
  }