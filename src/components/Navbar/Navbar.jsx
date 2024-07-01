import "./Navbar.css";
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart_icon.png'
import { Link } from "react-router-dom";
import dropDownIcon from '../assets/nav-dropDown.png';

import React, { useContext, useRef, useState } from 'react';
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {

    const [menu, setmenu] =useState("shop");
    const {getTotalCartItem} =useContext(ShopContext);
    const menuRef = useRef();

    const dropDownToggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <img className="nav-dropDown" onClick={dropDownToggle} src={dropDownIcon} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => {setmenu("shop")}}><Link style={{textDecoration: "none"}} to= '/'>Shop</Link> { menu === "shop" ? <hr />: <></>} </li>
        <li onClick={() => {setmenu("men")}}><Link style={{textDecoration: "none"}} to= '/men'>Men</Link>  { menu === "men" ? <hr />: <></>} </li>
        <li onClick={() => {setmenu("women")}}><Link style={{textDecoration: "none"}} to= '/women'>Women</Link>  { menu === "women" ? <hr />: <></>} </li>
        <li onClick={() => {setmenu("kids")}}><Link style={{textDecoration: "none"}} to= '/kids'>Kids</Link>{ menu === "kids" ? <hr />: <></>} </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')? <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}> Logout</button>: <button><Link style={{textDecoration: "none"}} to= '/login'>Login</Link></button>}
        
       <Link style={{textDecoration: "none"}} to='/cart'> <img src={cartIcon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  )
}

export default Navbar;