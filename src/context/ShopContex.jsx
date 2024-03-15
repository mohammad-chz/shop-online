import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContex = createContext(null)

const getDefaultCart = () => {
    let card = {}
    for (let index = 0; index < all_product.length + 1; index++) {
        card[index] = {quantity: 0, size: "M"};
    }
    return card
}

export default function ShopContexProvider(props) {
    const [cartItem, setCartItem] = useState(getDefaultCart)
    
    const [size, setSize] = useState("M")
    function handleClick(selectedSize) {
        setSize(selectedSize);
    }
    
    const addToCart = (itemId, size) => {
        setCartItem(prevCart => ({
            ...prevCart,
            [itemId]: {quantity: prevCart[itemId].quantity + 1, size: size}
        }))
    }

    const removeFromCart = (itemId) => {
        setCartItem(prevCart => ({
            ...prevCart,
            [itemId]: {quantity: prevCart[itemId].quantity - 1, size: prevCart[itemId].size}
        }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item].quantity > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item].quantity;
            }
        }
        return totalAmount
    }
    
    const getTotalCartItems = () => {
        let totalItem = 0
        for(const item in cartItem){
            if(cartItem[item].quantity > 0){
                totalItem += cartItem[item].quantity
            }
        }
        return totalItem
    }

    const contexValue = { all_product, cartItem, getTotalCartAmount, addToCart, removeFromCart, getTotalCartItems, handleClick, size}
    
    return (
        <ShopContex.Provider value={contexValue}>
            {props.children}
        </ShopContex.Provider>
    )
}
