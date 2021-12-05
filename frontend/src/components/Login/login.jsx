import React from 'react'
import {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, createMuiTheme } from '@mui/material/styles';
import Axios from 'axios';
import Swal from 'sweetalert2';
import '../../styles/Login.css'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          CraftCol
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();

function Login() {
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
  
    const HandleSubmit = async (event) => {
  
      event.preventDefault();
      const user = { correo, password }
      const res = await Axios.post('/usuario/login', user);
      console.log(res);
      console.log(res.data.usuario.nombre);
      console.log(res.status)
      console.log(res.data.tokenReturn)
      console.log(res.data.usuario._id)
  
  
      if (res.status!== 200) {
  
              
        Swal.fire({
        
          icon: 'error',
          title: 'Datos no validos',
          showConfirmButton: false,
          timer: 1500
          
        })
  
        
        
      }else {
        const token = res.data.tokenReturn
        const nombre = res.data.usuario.nombre
        const id = res.data.usuario._id
  
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('nombre', nombre)
        sessionStorage.setItem('id', id)
        window.location.href='/homeadmin'
        
  
  
  
  
      
    };
  
  }
  
  const theme = createMuiTheme({
    typography: {
        fontFamily:[
            'cursive'
        ].join(','),
    },
});
      return (
        <div className="container" >
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" >
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'rgb(0,0,0,0.4)' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" >
                  Ingresar
                </Typography>
                <Box className="prueba" component="form" onSubmit={HandleSubmit} noValidate sx={{ mt: 1 }} >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo Electronico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recuerdame"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Ingresar
                  </Button>
                  <p style={{fontFamily:'cursive'}}>¿No te has registrado aún?</p>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 2 }}
                  >
                    Registrarme
                  </Button>
                  <Grid container>
                    <Grid item xs>
                    </Grid>
                    <Grid item>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
  
          </ThemeProvider>
        </div>
      );
}

export default Login