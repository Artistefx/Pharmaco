import './footerStyle.css';
import React from 'react';
import logo from './images/logo.png';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
      <footer className='footer-container'>
        <div className='footer-row'>
          <div className='col'>
            <div className='log'> { <img src={logo} alt="Pharmaco Logo" /> } </div>
            <p className='p1'>Nous offrons une vaste gamme de  médicaments de qualité , livrés directement à votre porte.  </p>
          </div>
          <div className='col'>
            <h3>Contacts <div className='underline'><span></span></div></h3>
            <hr className='hr1'></hr>
            <p>Hay riad rue 18 Khouribga</p>
            <p className='email-id'>Matsswlnich@gmail.com</p>
            <p>+212 - 649184760</p>
          </div>
          <div className='col'>
            <h3>Links <div className='underline'><span></span></div></h3>
            <hr className='hr1'></hr>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">About us</a></li>
              <li><a href="">Features</a></li>
            </ul>
          </div>
          <div className='col'>
            <h3>Find us on : <div className='underline'><span></span></div></h3>
            <hr className='hr1'></hr>
            <div className='social-icons fab'>
              <i className='fab'><FaFacebookF /></i>
              <i className='fab'><FaInstagram /></i>
              <i className='fab'><FaWhatsapp /></i>
              <i className='fab'><FaTwitter /></i>
            </div>
          </div>
        </div>
        <hr></hr>
        <p className='copyright'>&copy; 2024 Pharmaco - All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  