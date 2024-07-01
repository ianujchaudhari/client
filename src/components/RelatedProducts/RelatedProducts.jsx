import React from 'react';
import './RelatedProducts.css';
import dataProduct from '../assets/data.js';
import Item from '../Item/Item.jsx';

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {
                dataProduct.map((item, i)=>{
                    return <Item  key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts;