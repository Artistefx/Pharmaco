import React from 'react';
import './signStyle.css';

function Sign() {
  return ( 
    <div className="form-container form-frame">
        <h1 className="form-title">Sign Up</h1>
      <form method="post" action="/sign">
       
        <div className="div">
          <label htmlFor='nom'>Nom:</label><br/>    
          <input type='text' name='nom' id='nom'  /><br/>
        </div>
        <div className="div">
          <label htmlFor='prenom'>Prenom:</label><br/>    
          <input type='text' name='prenom' id='prenom' /><br/>
        </div>
        <div className="div">
          <label htmlFor='email'>Email:</label><br/>    
          <input type='email' name='email' id='Email' required /><br/>
        </div>
        <div className="div">
          <label htmlFor='password'>password:</label><br/>    
          <input type='password' name='password' id='password' required /><br/>
        </div>
        <div className="div">
          <label htmlFor='DateN'>Date de naissance:</label><br/>    
          <input type='Date' name='DateN' id='DateN' required /><br/>
        </div>
        <div className="div">
          <label htmlFor='tel'>Numero Telephone:</label><br/>    
          <input type='tel' name='tel' id='tel' required /><br/>
        </div>
        <div>
          <button type="submit">S'inscrire</button>
        </div>
        <a href='/login' className="login-link">Déjà un compte ? Connectez vous.</a>
        
     
      </form>
    </div>
  );
}

export default Sign

