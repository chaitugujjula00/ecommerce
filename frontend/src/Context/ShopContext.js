import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart={};
    for (let index = 0; index < 300+1; index++) {
        cart[index]=0;
        
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [all_product,setAll_Product] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('https://ecommerce-8dzq.onrender.com/allproducts')
        .then((resp)=>resp.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('https://ecommerce-8dzq.onrender.com/getcart',{
                method:'POST',
                headers:{
                    Acceppt:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:'',
            }).then((res)=>res.json())
            .then((data)=>setCartItems(data))
        }
    },[])
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://ecommerce-8dzq.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('https://ecommerce-8dzq.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    const getTotalCost = () => {
        let totalCost=0;
        all_product.map(item=>{
            if(cartItems[item.id]>0){
                totalCost+=(cartItems[item.id]*item.new_price)
            }
        })
        return totalCost
    }

    const getTotalCartItems = () => {
        let totalItems=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems+=cartItems[item]
            }
        }
        return totalItems
    }
    const contextValue = {getTotalCost, getTotalCartItems, all_product, cartItems, addToCart, removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;