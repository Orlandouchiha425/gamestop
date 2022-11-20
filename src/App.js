import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm';
import Home from "./pages/Home"
import NavBar from "./NavBar/NavBar";
import SignUpForm from './components/SignUpForm/SignUpForm';
import CreateGameForm from './components/Admin/createGameForm'
import OneGame from './pages/OneGame/OneGame'
// import ImageUpload from './components/Images/ImageUploads';
import Clearance from './components/Clearance/Clearance';
import { getUser } from './utilities/users/users-service';
import UserLogOut from './components/Logout/Logout';

function App() {
  const [user, setUser ] = useState(getUser());
const [ admin,setAdmin ] = useState(null)
  return (
    <div className="App">
<NavBar setUser={setUser} user={user} />
<Routes>
  {
  user ?
  <>
<Route path="/" element={<Home setUser={setUser}/>}/>
<Route path='/admin' element={<CreateGameForm  setUser={setUser} />}/>
<Route path='/clearance' element={<Clearance />}/>
<Route path='/:id' element= {<OneGame />}/>
<Route path='about' element = {<UserLogOut user={user} setUser={setUser}/>}/>



  </>
  :
  <>
  <Route path='/login' element={<LoginForm  setUser={setUser} user={user}/>}/>
  <Route path='/signup' element= {<SignUpForm setUser={setUser} user={user}/>}/>
  <Route path="/*"  element={<LoginForm  setUser={setUser} user={user}/>}/>
  </>

}
       
</Routes>
</div>

);
}

export default App;
