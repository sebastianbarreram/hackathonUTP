import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Login from './components/Login/login';
//import Home from './components/Home/Home'
import Navbar from './components/Home/navbar'
import Footer from "./components/Home/footer";
<<<<<<< HEAD
import Catalogo from "./components/Catalogo/catalogo";
=======
import Registro from "./components/Login/Registro";
>>>>>>> d75df72b829afaa75a434c136406045bcc1b7037


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
<<<<<<< HEAD
        <Route path="/login" exact component ={Login} />
        <Route path="/catalogo" exact component ={Catalogo} />

=======
        <Route path="/login" exact component={Login} />
        <Route path="/registro" exact component={Registro} />
>>>>>>> d75df72b829afaa75a434c136406045bcc1b7037
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
