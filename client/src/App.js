
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen'
import Userslist from './screens/Userslist';
import Coffeeslist from './screens/Coffeeslist';
import Addcoffee from './screens/Addcoffee';
import Orderslist from './screens/Orderslist';



function App() {
  return (
    <div className="App">
      

      <BrowserRouter>

      <Navbar />

        <Routes>

          <Route path="/" element={<Homescreen />}  />
          <Route path="/cart" element={<Cartscreen />}  />
          <Route path="/register" element={<Registerscreen />}  />
          <Route path="/login" element={<Loginscreen />}  />
          <Route path="/orders" element={<Ordersscreen />}  />
          <Route path="/admin" element={<Adminscreen />} />
          <Route path="/admin/userslist" element={<Userslist />} exact />
          <Route path="/admin/orderslist" element={<Orderslist />} exact />
          <Route path="/admin/coffeeslist" element={<Coffeeslist />} exact />
          <Route path="/admin/addcoffee" element={<Addcoffee />} exact />
        </Routes>


       
      </BrowserRouter>


    </div>
  );
}

export default App; 
