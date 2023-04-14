import { useState } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, createTheme, ThemeProvider} from "@mui/material";
import { useContext } from "react";
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignInSide() {

    const navigate = useNavigate();

    const [signUp, setSignUp] = useState(false);

    const {loginUser, registerUser} = useContext(UserContext)
    const initialValues = {
        name: "",
        lastName: "",        
        email: "",
        password: ""
    };

    const [user, setUser] = useState(initialValues);

    const handleChange = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    /* console.log(user); */

    const handleSubmit = (event) => {
        event.preventDefault();
        if(signUp){
          registerUser(user);
        }else {
          loginUser(user); 
        }
        setUser(initialValues);

        navigate("/");
    };

    const changeMode = () => {
      setSignUp(!signUp)
      setUser(initialValues)
    }
    
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://yt3.googleusercontent.com/ytc/AGIKgqPBwr1vOnt2rLXHnVRzOUvOSZ5M_FijGeIx-N76zQ=s900-c-k-c0x00ffffff-no-rj)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              
            </Avatar>
            <Typography component="h1" variant="h5">
               {signUp ? "Sign up" : "Sign in"}           {/* Sign in Valor original*/}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {signUp && (
                <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombre"
                name="name"
                
                onChange={handleChange}
                value={user.name}
              />              
              )}

              {signUp && (
                <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                
                onChange={handleChange}
                value={user.lastName}
              />              
              )}
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={user.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={user.password}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {signUp ? "Registrate" : "Iniciar Sesión"}
              </Button>
              <Grid container>                
                <Grid item>
                  <Button onClick={changeMode}>
                    {signUp ? "¿Ya tienes cuenta? Inicia Sesión" : "¿No tienes cuenta? Registrate"}
                  </Button>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}