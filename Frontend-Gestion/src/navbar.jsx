import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <div className='navbar'>
    
        <ul className="navbar-menu">
            <li>Home</li>
            <li>Menu</li>
            <li>---</li>
            <li>Contact-us</li>
        </ul>
        <div className="navbar-right">
            <img src={search} alt=""/>
            <div className="navbar-search-icon">
                <img src={backet-icon} alt="" />
                <div className="dot">
                    <button>Sign In</button>
                    </div>              
            </div>
        </div>
        
      
    </div>
  )
}

export default Navbar;
