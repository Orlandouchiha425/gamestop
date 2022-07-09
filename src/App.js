import {useState} from 'react'
import AuthPage from './pages/AuthPage';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
function App() {
  const [user, setUser ] = useState(null);

  return (
    <div className="App">
{
  user?
  <Routes>
<Route path="/" element={<Home setUser={setUser}/>}/>
  </Routes>
  :
  <AuthPage setUser={setUser}/>
}
    </div>
  );
}

export default App;
