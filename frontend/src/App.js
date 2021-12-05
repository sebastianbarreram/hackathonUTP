import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Login from './components/Login/login';
//import Home from './components/Home/Home'
import Navbar from './components/Home/navbar'
import Footer from "./components/Home/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path="/login" exact component ={Login} />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
