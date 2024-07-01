import React, {useContext} from 'react'
import CartItems from '../components/CartItems/CartItems';
import { ShopContext } from '../context/ShopContext';



const Cart = () => {

  const context = useContext(ShopContext);

  return (
    <div className='cart'>
      <CartItems context={context}/>
    </div>
  )
}

export default Cart