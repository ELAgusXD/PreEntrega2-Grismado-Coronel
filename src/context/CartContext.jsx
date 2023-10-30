
import React, {createContext, useState, useContext} from 'react';



//creación del context
export const CartContext = createContext();


//atajo para importar
export const useCartContext = () => {
useContext(CartContext)
}


//provider
export const CartProvider = ({children}) =>{


    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)


    const addItem = (item, amount) =>{
    
        if (isInCart(item.id)){
                const newCart = [...cartItems]
                for (const itemCompare of newCart) {
                    if (itemCompare.item.id === item.id) {
                        itemCompare.amount = itemCompare.amount + amount
                    }
                }
                setCartItems(newCart)
    
            } else {
                setCartItems([...cartItems, { item: item, amount: amount }])
            }
        }


    const modifyCartQuantity=(amount) => {
        setCartCount(amount);
    }

    const cartCounter=() =>{
        let total = 0;
        cartItems.forEach((pcount) => (total += pcount.amount));
    
        return total;
      }

    const removeItem = (itemId) => {

        let newCart = cartItems.filter(produc=> produc.item.id !== itemId)
        setCartItems(newCart)

    }

    const clear = () => {
        setCartItems([])
        setCartCount(0);
    }

    const isInCart = (itemId)=>{
        let result = cartItems.find(product => product.item.id === itemId)
        if(result == undefined){
            result = false;
        } else{
            result = true;
        }
        // console.log('isAlreadyInCart', result)
        return result
    }

    const precioTotal=() => {
        let precioTotal = 0;
        cartItems.forEach((prod) => (precioTotal += prod.item.price * prod.amount));
    
        return precioTotal;
      }


    



return(
    <CartContext.Provider 
    value={{
        cartCount, 
        cartItems,
        addItem, 
        removeItem, 
        clear, 
        isInCart, 
        cartCounter,
        modifyCartQuantity ,
        precioTotal
        }}>
        {children}
    </CartContext.Provider>
)

}