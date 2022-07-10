// import { Component } from "react";
import { useState } from "react";
import { signUp } from '../../utilities/users-service';
import { useNavigate } from "react-router-dom";
export default function SignUpForm({setUser}){
  const [state, setState] = useState({
  name: '',
  email: '',
  password: '',
  confirm: '',
  error: ''
  })

  let navigate = useNavigate()

 const handleChange = (evt) => {
  setState({[evt.target.name]: evt.target.value,
    error:''})
 }


 const handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    const formData = {...setState}
    delete formData.confirm;
    delete formData.error;
     // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await signUp(formData)
    setUser(user)

  }catch{
        // An error happened on the server
        setState({ error: 'Sign Up Failed - Try Again' });
    }
 }

// We must override the render method
// The render method is the equivalent to a function-based component
// (its job is to return the UI)

  const disable = state.password !=state.confirm
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={state.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={state.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={state.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={state.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{state.error}</p>
    </div>
  );
}
