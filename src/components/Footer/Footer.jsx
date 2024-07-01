import React from 'react';
import './Footer.css';
import footerLog from '../assets/logo_big.png';
import Insta from '../assets/instagram_icon.png';
import Pintester from "../assets/pintester_icon.png";
import whatsApp from '../assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerLog} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={Insta} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Pintester} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsApp} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer