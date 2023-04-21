
import UserContext from "../../context/user/UserContext";
import { useContext } from "react";
import { Card, CardContent, CardMedia, Typography, Container } from "@mui/material";


const Profile = () => {

  const {infoUser} = useContext(UserContext);  


  const {name, lastName, email, isAdmin} = infoUser;
  return (
    <div>        
        <Container sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "140px",
        marginBottom: "140px"
      }}>
        <Card sx={{ maxWidth: 500}}>
          <CardMedia sx={{ height: 250, width: 500}} image={isAdmin ? "https://www.gizcomputer.com/wp-content/uploads/2021/10/Que-hace-un-Administrador-de-Sistemas-Informaticos-en-Red.jpg" : "https://static.vecteezy.com/system/resources/previews/001/822/712/non_2x/man-buying-something-online-free-photo.jpg"} title="Hombre con cigarro" />
          <CardContent>
          <Typography
              variant="h6"
              align="center"
              color="text.secondary"
            >
              Nombre: {name} {lastName}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Email: {email}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              Rol: {isAdmin ? "Administrador" : "Cliente"}
            </Typography>
          </CardContent>         
        </Card>
      </Container>           
    </div>
  )
}

export default Profile