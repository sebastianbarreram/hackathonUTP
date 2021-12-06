import {React,useEffect,useState} from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Axios from 'axios'



function Catalogo(){
    
  let [tam, setTamSelect] =useState([])
 
  useEffect(() => {
    obtenerProductos()
}, [])

  const obtenerProductos = async () => {

    const res = await Axios.get('/producto/listar')
    const Productlist = res.data
    setTamSelect(Productlist)

}
const theme = createTheme();
    return(
<div className="container mt-5" >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>      
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {tam.map((card) => (
              
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                <a href="/#!">
                  <CardMedia
                    component="img"
                    image={card.imagen}
                    alt=""
                    style={{height:"250px"}}
                  />
               </a>   
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" >
                    {card.nombre}
                    </Typography>
                    
                    <Typography>                     
                    {card.estado}
                      <br/>
                      <br/>
                    {card.precio}
                    </Typography>
                  </CardContent>
                  <CardActions className="d-flex justify-content-center">
                    <Button size="large" href="/#!">Añadir al carrito<ShoppingCartOutlinedIcon /></Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
</div>
    )
}

export default Catalogo;