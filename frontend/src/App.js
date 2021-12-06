import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Login from './components/Login/login';
//import Home from './components/Home/Home'
import Navbar from './components/Home/navbar'
import Footer from "./components/Home/footer";
import Catalogo from "./components/Catalogo/catalogo";
import Registro from "./components/Login/Registro";
import PrivateRouter from "./Routes/privateRouter.jsx";
import Ventas from "./private/Ventas";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path="/login" exact component ={Login} />
        <Route path="/registro" exact component={Registro} />
        <PrivateRouter path="/ventas" exact component={Ventas}/>
        <Route path="/catalogo" exact component ={Catalogo} />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
