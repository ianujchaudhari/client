import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropDownIcon from '../components/assets/dropdown_icon.png';
import Item from '../components/Item/Item.jsx';

const ShopCategory = (props) => {
const { allProduct } = useContext(ShopContext);
  return (
    <div className='shopCategory'>
      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort-by <img src={dropDownIcon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {
         allProduct.map((item ,i)=> {
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
          }
          else{
            return null;
          }
        } )
        }
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory