import React from 'react';
import "./Compo.css";
import { useEffect,useCallback} from 'react';

import { NavLink } from 'react-router-dom';
import { IoPersonCircleSharp, IoLogOutSharp } from 'react-icons/io5'; 
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
    const token = localStorage.getItem('token');
    const logout = useCallback(() => {
        localStorage.removeItem('token');
      }, []);
    
      useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem('token');
        if (token) {
          // If token exists, set the logout functionality
          const loginLink = document.getElementById('login-link');
          if (loginLink) {
            loginLink.addEventListener('click', logout);
          }
        }
        
        // Cleanup function to remove event listener
        return () => {
          const loginLink = document.getElementById('login-link');
          if (loginLink) {
            loginLink.removeEventListener('click', logout);
          }
        };
      }, [logout]);

    return(
        <>
        <div className='header'>

            <div className='logo'>
                <img src='https://www.theindiatourism.com/images/logo.webp' alt='hd'/>

            </div>
            <div className='middle'>
                <img src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='hd'/>

            </div>
            <div className='mail'>
                <p>Email : info@theindiatourism.com</p>
                <FaPhoneVolume/>: 1234567890
            </div>
            {/* <div className='login'>
      
        <NavLink to='/login'>
          <IoPersonCircleSharp className='icon'/>
        </NavLink>

    </div> */}
          <div className='login'>
      <NavLink to='/login' id='login-link'>
        {localStorage.getItem('token') ? (
          // If token exists, render logout icon
          <IoLogOutSharp className='icon'/>
        ) : (
          // If no token, render login icon
          <IoPersonCircleSharp className='icon'/>
        )}


          {/* {token ?  <IoPersonCircleSharp className='icon'/> : <IoLogOutSharp className='icon'/>} */}
      </NavLink>
    </div>


        </div>
     
        
        </>
    )
}



export default Header;
