

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Compo.css"
import { FaGoogle } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import "./Login.css"
import Header from './Header';

const Register = () => {
  const [rdata, rdataset] = useState({
    username: "",

    email: "",
    password: "",
    mobilenumber: "",
  })
  const nav = useNavigate()
  const appdata = (e) => {

    rdataset({ ...rdata, [e.target.name]: e.target.value });
    console.log(rdata)
  };
  const datasubmit = (e) => {
    e.preventDefault()
    axios
      // .post('http://localhost:2828/api/register', rdata)
      .post('https://majarproject.onrender.com/api/register', rdata)

      .then((res) => {


        console.log(res.data)

        if (res.data.msg === "user successfully registered") {
          localStorage.setItem('token', res.data.jwttoken)

          console.log(res.data.jwttoken)
          nav("/login")
          alert(res.data.msg)
        }
        else {
          alert(res.data.msg)
        }
      })
      .catch((error) => {
        console.log(error);
        // alert("User has not registered, please try again");
      });

    rdataset({
      username: "",

      email: "",
      password: "",
      mobilenumber: "",
    });

  };












  return (

    <>
    <div className='full'>

      <div className='first'>
        <img src='https://www.hdwallpapers.in/download/natur_water_sea_travel_sky_beach_turquoise_summer_island_4k_hd-HD.jpg'  alt="not found"/>

      </div>

    

   
      <div className='second'>
        {/* <p className='question'>HAVE AN ACCOUNT?</p> */}





      

          <label htmlFor='username'>Username :    </label><br/>
          <input type='text' name='username' value={rdata.username} onChange={appdata} required  /><br/>
    


    
          <label htmlFor='email'>Email :    </label><br/>

          <input type='email' name='email' value={rdata.email} onChange={appdata} required /><br/>
     




      

          <label htmlFor="password">Password:    </label><br/>

          <input type='password' name='password' value={rdata.password} onChange={appdata} required /><br/>
    


 

          <label htmlFor='mobilenumber'>Phone Number :   </label><br/>
          <input type='number' name='mobilenumber' value={rdata.mobilenumber} onChange={appdata} required /><br/><br/>
   
      
          <button onClick={datasubmit} className='reg-but'>Register Your Account</button>
          

          <p>Forgot Password</p>

        <p>-Or Sign In With-</p>
        <div className='signin'>

          <p><FaGoogle className='social' /></p>
          <p><SiGooglechrome className='social' /></p>
          <p><SiGmail className='social' /></p>



        </div>



      </div>

      </div>
      <Header username={rdata.username} />
      </>
  )

}
export default Register












