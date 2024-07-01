import './Popular.css';
import React, { useEffect, useState } from 'react'
import  data_product from '../assets/data.js'
import Item from '../Item/Item';

const Popular = () => {

  const [popularProduct, setPopularProduct] = useState([]);
  
  useEffect(()=>{
    fetch('https://server-p12s.onrender.com/popularinwomen')
    .then((res)=> res.json())
    .then((data)=> setPopularProduct(data))
  },[])


  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />

        <div className="popular-item">
            {popularProduct.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular