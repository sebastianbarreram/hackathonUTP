
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <Router>
    
    {/* Mientras tanto en la raíz, luego se cambia */}
    <Login/>
  
    </Router>
  );
}

export default App;
