import { logOut } from '../../utilities/users/users-service';
// import styles from "./LogOut.module.css"
export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}


return (
 <div className="snow">
  
    <div>
      <h1>{user.email}</h1>
      <h1>{user.name}</h1>
       <button  onClick={handleLogOut}>LOG OUT</button>
    </div>
    
    </div>
  );
  }