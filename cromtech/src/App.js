import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from'react-router-dom';
import Home from './pages/home/Home';
import About from'./pages/aboutus/About';
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import Ecommerce from './pages/ecommerce/Ecommerce';
import Solutions from './pages/solutions/Solutions';
import Mobility from './pages/mobility/Mobility';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact'element={<Contact/>}/>
    <Route path='services' element={<Services/>}/>
   <Route path='ecommerce' element={<Ecommerce/>}/>
   <Route path='solutions' element={<Solutions/>}/>
   <Route path='mobility' element={<Mobility/>}/>
   <Route path="*" element={<h1>page not found!</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
