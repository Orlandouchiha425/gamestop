import { logOut } from '../../utilities/users/users-service';

export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}


return (
 
    <div>
      <h1>{user.email}</h1>
      <h1>{user.name}</h1>
       <button  onClick={handleLogOut}>LOG OUT</button>
    </div>
    
  );
  }