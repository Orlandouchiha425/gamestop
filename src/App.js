import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
// import Home from './pages/AuthPage/AuthPage';
import LoginForm from './components/LoginForm/LoginForm';

import NavBar from "./NavBar/NavBar";
import SignUpForm from './components/SignUpForm/SignUpForm';
import CreateGameForm from './components/Admin/createGameForm'
import OneGame from './pages/OneGame/OneGame'
// import ImageUpload from './components/Images/ImageUploads';
import Clearance from './components/Clearance/Clearance';
import { getUser } from './utilities/users/users-service';
import UserLogOut from './components/Logout/Logout';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  const [user, setUser ] = useState(getUser());
const [ admin,setAdmin ] = useState(null)
// const [game, setGame ] =useState()
  return (
    <div className="App">
<NavBar setUser={setUser} user={user} />
{
  user?
  <>
  <Routes>
{/* <Route path="/" element={<Home setUser={setUser}/>}/> */}
<Route path ='/login' element= {<LoginForm setUser={setUser}/>}/>
<Route path='/signup' element= {<SignUpForm setUser={setUser} />}/>
<Route path='/admin' element={<CreateGameForm  setUser={setUser} />}/>
<Route path='/clearance' element={<Clearance />}/>
<Route path='/:id' element= {<OneGame />}/>
<Route path='about' element = {<UserLogOut user={user} setUser={setUser}/>}/>


  </Routes>
  </>
  :
  <AuthPage  setUser={setUser} user={user}/>
  
  
}
    </div>
  );
}

export default App;
