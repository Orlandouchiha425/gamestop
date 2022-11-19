import {useState} from 'react'
import AuthPage from './pages/AuthPage';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import LoginForm from './components/LoginForm/LoginForm';
import NavBar from './NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import CreateGameForm from './components/Admin/createGameForm'
import OneGame from './pages/OneGame/OneGame'
// import ImageUpload from './components/Images/ImageUploads';
import Clearance from './components/Clearance/Clearance';
import { getUser } from './utilities/users/users-api';
import UserLogOut from './components/Logout/Logout';
function App() {
  const [user, setUser ] = useState(getUser());
const [ admin,setAdmin ] = useState(null)
// const [game, setGame ] =useState()
  return (
    <div className="App">
<NavBar />
{
  user?
  <>
  <Routes>
<Route path="/" element={<Home />}/>
<Route path ='/login' element= {<LoginForm setUser={setUser}/>}/>
<Route path='/signup' element= {<SignUpForm setUser={setUser} />}/>
<Route path='/admin' element={<CreateGameForm  setUser={setUser} />}/>
<Route path='/clearance' element={<Clearance />}/>
<Route path='/:id' element= {<OneGame />}/>
<Route path='about' element = {<UserLogOut/>}/>
{/* <Route path='*' element = {<Home />}/> */}

  </Routes>
  </>
  :
  <LoginForm path="/login" setUser={setUser}/>
}
    </div>
  );
}

export default App;
