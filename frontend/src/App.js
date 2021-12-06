import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Login from './components/Login/login';
//import Home from './components/Home/Home'
import Navbar from './components/Home/navbar'
import Footer from "./components/Home/footer";
import Catalogo from "./components/Catalogo/catalogo";
import Registro from "./components/Login/Registro";
// import Ventas from "./components/Home/Ventas";
import Name from "./components/Home/Name";
import PrivateRouter from "./Routes/privateRouter.jsx";
import Ventas from "./private/Ventas";
import Carrito from "./components/Carrito/carrito";
import Detalles from "./components/Catalogo/Detalles";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path="/login" exact component ={Login} />
        <Route path="/carrito" exact component ={Carrito} />
        <Route path="/registro" exact component={Registro} />
        {/* <Route path="/name" exact component={Name} /> */}
        
        <PrivateRouter path="/ventas" exact component={Ventas}/>
        <Route path="/catalogo" exact component ={Catalogo} />

        <Route path="/usuario/:id">
          <Detalles />

        </Route>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
