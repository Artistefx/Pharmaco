import React from 'react';
import './signStyle.css';
import {  BsBoxArrowRight } from 'react-icons/bs';
import logo from './images/logo.jpg';


function Sign() {
  return ( 
    <div className='container'>
      <div className="additional-container">
      </div>
    <div className="form-container  form-frame">
                <div className="loginHeader">
                    <img src={logo} alt="Pharmaco Logo" className="loginLogo" />
                </div>
  
        <h1 className="form-title">Create your account</h1>
      <form method="post" action="/sign">
       
        <div className="div">
        
          <input type='text' name='nom' id='nom' value="First name"  /><br/>
        </div>
        <div className="div">
          
          <input type='text' name='prenom' id='prenom' value="Last name" /><br/>
        </div>
        <div className="div">
              
          <input type='email' name='email' id='Email' value="Email" required /><br/>
        </div>
        <div className="div">
             
          <input type='password' name='password' id='password' placeholder="Password" required /><br/>
        </div>
        <div className="div">
            
          <input type='Date' name='DateN' id='DateN' required placeholder="Date of birth" /><br/>
        </div>
        <div className="div">
            
          <input type='tel' name='tel' id='tel' required value="Phone number" /><br/>
        </div>
        <div>
        <br/>
          <button type="submit" >Sign up  < BsBoxArrowRight/></button>
        </div>
        <a href='/login' className="login-link">You already have account ?  Sign in .</a>
      </form>
      </div>
      </div>
    
   
  );
}

export default Sign

