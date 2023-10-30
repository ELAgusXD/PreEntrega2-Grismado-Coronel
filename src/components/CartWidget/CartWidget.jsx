import './CartWidget.css'
import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext'

export const CartWidget =  () =>{
    
    const {cartCounter, cartItems} = useContext(CartContext);

    {

    return(

        cartItems.length>0?

        <>
            <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-cart-supermarket-flatart-icons-lineal-color-flatarticons.png" alt="carrito"/>
            <span>{cartCounter()}</span>
        </>

        :

        null

    )

    }

}
