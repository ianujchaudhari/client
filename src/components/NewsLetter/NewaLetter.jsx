import './NewsLetter.css';
import React from 'react'

const NewaLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email"  placeholder='Your Email id'/>
            <button>Subscrribe</button>
        </div>
    </div>
  )
}

export default NewaLetter