import {React, useState, useEffect} from "react";
import { Navbar,Container,Nav,Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "../../assets/CraftCol_fwhite.png";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function NavBar() {

  const [menu,setMenu]=useState(true)
  useEffect(() => {
    if(sessionStorage.getItem('token')){
      setMenu(false)

    }
 
  }, [])
  const [hide, setHide]= useState(false)
  useEffect(() =>{

    if (sessionStorage.getItem('token')){
      setHide(true)
    }

  }, [])

  const salir =()=>{
    sessionStorage.clear()
    window.location.href='/'
  }

  return (
    <div>
      <Navbar  expand="xl" style={{fontFamily:"cursive", backgroundColor:"#f6d0b2"}}>
    <Container>
      <Navbar.Brand href="/">
        <img
          src={Logo }
           width=""
           height="150px"
          //  className="d-inline align-top"
          className="d-inline-block align-center me-5  "
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav.Link href="/#!" className="d-flex  flex-row-reverse"><ShoppingCartOutlinedIcon style={{color:"rgb(0,0,0,0.58)"}}/></Nav.Link>
      <Container style={{maxWidth:"400px"}}>
      <form class="d-flex form-inline my-3">
            <input class="form-control mr-sm-2 " type="search" placeholder="¿Que Artesanía estás buscando?" aria-label="Search"/>
            <Button className="my-sm-0" type="submit" style={{background:"rgb(0,0,0,0.5)", border:"none"}}><i className="fas fa-search"></i></Button>
            
        </form>
        
        </Container>
        
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">

        <Container>
          
          <Nav className="d-flex justify-content-center align-items-center ">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/catalogo">Catalogo</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
          <Nav.Link href="/conocenos">Conocenos</Nav.Link>
          <Nav.Link hidden={hide} href="/login" className=' fas fa-user mt-1'> Ingresar</Nav.Link>
          <Nav.Link hidden={menu} href="/ventas">Vender</Nav.Link>
          <Nav.Link hidden={menu} href="/perfil" className="fas fa-user mt-1">{' '+sessionStorage.getItem('nombre')}</Nav.Link>
          <Nav.Link hidden={menu} onClick={()=>salir()} href="/login"className='fas fa-sign-out-alt mt-1'> Salir</Nav.Link>
        
         
          </Nav>
          
        </Container>  

               
      </Navbar.Collapse>
    </Container>
    
  </Navbar>
  </div>
  );
}

export default NavBar;
