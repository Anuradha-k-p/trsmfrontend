import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../Component/Home';
import IndiaTrsm from '../Component/IndiaTrsm';
import Packages from '../Component/TourPacksge';
import PlaceVisit from '../Component/PlaceVisit';
import Offers from '../Component/Offers';
import Contact from '../Component/ContactUs';
import "./Navbar.css"
import ContextApi from '../Context/ContextData';
import Header from '../Component/Header';
import Login from '../Component/Login';
import Register from '../Component/Register';
import TrsmDynamic from './TrsmDynamic';
import Homedynamic from './Homedynamic';
import Footer from '../Component/Footer';

const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const closeMenu = () => {
    setMenuOpen(false);
  };


    return(
        <>

        <Header/>




        
<div className="hamburger-menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={menuOpen ? 'line line1 open' : 'line line1'}></div>
        <div className={menuOpen ? 'line line2 open' : 'line line2'}></div>
        <div className={menuOpen ? 'line line3 open' : 'line line3'}></div>
      </div>

      <div className={menuOpen ? 'menu open' : 'menu'}>
       
        <NavLink onClick={closeMenu}  className="NavLink" to="/">HOME</NavLink>
        <NavLink onClick={closeMenu} className="NavLink" to="/indiatrsm">INDIA TOURISM</NavLink>
         <NavLink onClick={closeMenu} className="NavLink" to="/package">TOUR PACKAGES</NavLink>
         <NavLink onClick={closeMenu} className="NavLink" to="/placevisit">PLACES TO VISITS</NavLink>
        <NavLink onClick={closeMenu} className="NavLink" to="/offers">TOUR OFFERS</NavLink>
       <NavLink onClick={closeMenu} className="NavLink" to="/contact">CONTACT US
</NavLink>









      
      </div>
    </div>


<ContextApi>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/indiatrsm' element={<IndiaTrsm/>}/>
        <Route path='/package' element={<Packages/>}/>
        <Route path='/placevisit' element={<PlaceVisit/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/trsmdynamic/:id' element={<TrsmDynamic/>}/>
        <Route path='/homedynamic/:id' element={<Homedynamic/>}/>
    </Routes>

    </ContextApi>
    <Footer/>

        
        </>
    )
}


export default Navbar;