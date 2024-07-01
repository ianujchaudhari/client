import React, { createContext, useEffect, useState } from 'react';
export const ShopContext =  createContext(null);


const getDefaultCart = () => {

    let cart = {};

    for(let index = 0 ; index < 300 +1 ; index ++){
        cart[index] = 0;
    }
    
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItem ,setCartItem] = useState(getDefaultCart);
    const [  allProduct, setAllProduct] = useState([]);

    useEffect(()=>{
        fetch('https://server-p12s.onrender.com/allproducts')
        .then((resp)=> resp.json())
        .then((data)=>setAllProduct(data))

        if(localStorage.getItem('auth-token')){
            fetch('https://server-p12s.onrender.com/getcart',{
                method: 'POST',
                headers:{
                    Accepts: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body:"",
            }).then((res)=> res.json())
            .then((data) => setCartItem(data))
        }
    },[])

    const addToCart = (itemId)=> {
        setCartItem ((prev)=> ({...prev , [itemId]: prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://server-p12s.onrender.com/addtocart',{
                method: 'POST',
                headers:{
                    Accepts: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'itemId': itemId,
                })
            })
            .then((res) => res.json())
            .then((data) => {console.log(data)})
        }
    }

    const removeFromCart = (itemId)=> {
        setCartItem ((prev)=> ({...prev , [itemId]: prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://server-p12s.onrender.com/removefromcart',{
                method: 'POST',
                headers:{
                    Accepts: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'itemId': itemId,
                })
            })
            .then((res) => res.json())
            .then((data) => {console.log(data)})
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = allProduct.find((product)=> product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItem =() => {
        let totalItem = 0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                totalItem += cartItem[item];
            }
        }
        return totalItem;
    }

    const contextValue = { allProduct, cartItem, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItem };


   
    return ((
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    ))

}


export default ShopContextProvider;