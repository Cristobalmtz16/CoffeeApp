
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';



function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>

      <Routes>

        <Route path="/" element={<Homescreen />} exact />
        <Route path="/cart" element={<Cartscreen />} exact />
        <Route path="/register" element={<Registerscreen />} exact />
        <Route path="/login" element={<Loginscreen />} exact />
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App; 
