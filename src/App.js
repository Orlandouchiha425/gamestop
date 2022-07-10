import {useState} from 'react'
import AuthPage from './pages/AuthPage';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import LoginForm from './components/LoginForm/LoginForm';
import NavBar from './NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
function App() {
  const [user, setUser ] = useState(null);

  return (
    <div className="App">
<NavBar />
{
  // user?
  <>
  <Routes>
<Route path="/" element={<Home setUser={setUser}/>}/>
<Route path ='/login' element= {<LoginForm setUser={setUser}/>}/>
<Route path='/signup' element= {<SignUpForm setUser={setUser} />}/>
  </Routes>
  </>
  // :
  // <LoginForm path="/login" setUser={setUser}/>
}
    </div>
  );
}

export default App;
