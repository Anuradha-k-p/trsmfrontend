import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate,NavLink } from 'react-router-dom'
import "./Login.css"





const Login = () => {


  const nav=useNavigate()
  const [ldata,ldataset]=useState({
    email:"",
    password:""
  })
  const appdata1=(e)=>{
    
    ldataset({ ...ldata, [e.target.name]: e.target.value });
    console.log(ldata)
  };
  const datasubmit=(e)=>{
    e.preventDefault()
    axios

    // .post('http://localhost:2828/api/login',ldata)
    .post('https://majarproject.onrender.com/api/login',ldata)


      .then((res) => {
        
        
        
        if (res.data.msg === "your login successfully") {
          localStorage.setItem("token", res.data.token);
          console.log(res.data.jwttoken)
          
          alert(res.data.msg)
          nav("/")
      }
      else{
        alert(res.data.msg);
      }
      })
      .catch((error) => {
        console.log(error);
       
      });

      ldataset({        
        email: "",
        password: "",
      });

  };

















  return (
    <div className='full'>
      <div className='first'>
        <img src='https://www.hdwallpapers.in/download/natur_water_sea_travel_sky_beach_turquoise_summer_island_4k_hd-HD.jpg'  alt="missing"/>

      </div>



      <div className='second'>

  
      <label htmlFor='email'>Email: </label><br />
      <input type='email' name='email' value={ldata.email} onChange={appdata1} className='in1' required /><br/>

      <label htmlFor='password'>Password: </label><br />
      <input type='password' name='password' value={ldata.password} onChange={appdata1} className='in1' required/><br/>
      <br />
      <br />
      <button onClick={datasubmit} className='reg-but'>LogIn</button>
      
      <div>


      

      <NavLink to="/register" className="nextpage">
         Haven't account please Register first
      </NavLink>
      </div>
      </div>


    </div>
  )
}

export default Login




