import UserContext from "../../context/user/UserContext";
import { useContext } from "react";

const Profile = () => {

  const {infoUser, userEdit} = useContext(UserContext);  


  const {name, lastName, email, isAdmin} = infoUser;
  return (
    <div>
        <h1>{name +' '+ lastName}</h1>
        <h3>{email}</h3>
        <p>{isAdmin ? "Administrador" : "Cliente"}</p>
    </div>
  )
}

export default Profile