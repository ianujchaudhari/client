import './Offers.css';
import exclusiveImage from  '../assets/exclusive_image.png'

import React from 'react'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusiveImage} alt="" />
        </div>
    </div>
  )
}

export default Offers