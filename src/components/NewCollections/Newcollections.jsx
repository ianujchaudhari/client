import './NewCollections.css';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

const Newcollections = () => {

  const [ newCollection, setNewCollection ] = useState([]);

  useEffect(()=>{
    fetch('https://server-p12s.onrender.com/newcollection')
    .then((res)=> res.json())
    .then((data)=> setNewCollection(data))
  },[])

  return (
    <div className='newCollections'>
        <h1>NEW COLLECCTIONS</h1>
        <hr />
        <div className="collections">
            {newCollection.map((item,i)=>{
                return <Item  key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            })} </div>
    </div>
  )
}

export default Newcollections