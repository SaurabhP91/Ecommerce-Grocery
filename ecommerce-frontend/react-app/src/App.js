import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Bestsellers from './components/Bestsellers/Bestsellers';

import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Cartpage from './pages/Cartpage/Cartpage';


function App() {
  return (
  <Router>
    <Routes>


      <Route exact path='/' element={<Homepage/>} /> 

      <Route exact path='/login' element={ <Login />} /> 

      <Route exact path='/products' element={<Products/>} />

      <Route exact path='/cart' element={<Cartpage/>} />
    </Routes>
  </Router>
  );
}

export default App;
