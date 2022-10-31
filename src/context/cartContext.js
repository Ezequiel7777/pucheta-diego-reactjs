import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext({
  products: [],
  orders: [],
  addToCart: () => {},
  clearCart: () => {},
  removeToCart: () => {},
  clearOrder: () => {},
  count: 0,
})

const useCart = () => {
    return useContext(CartContext)
}

const CartContextProvider = ( {children} ) => {

  const [products, setProducts] = useLocalStorage('products', [])
  const [orders, setOrder] = useLocalStorage('orders', [])

  const addToCart = ( product ) => {
    setProducts( products => [...products, product] )
    setOrder([product])
  }
  const clearCart = () => {
    setProducts([])
  }

  const clearOrder = () => {
    setOrder([])
  }
  
  const removeToCart = (item) => { 
      const productsCartRestantes = products.filter(it => it.title !== item.title)  
      setProducts(productsCartRestantes)
  }

  const context = {
    products: products,
    orders:orders,
    addToCart: addToCart,
    clearCart: clearCart,
    removeToCart: removeToCart,
    clearOrder: clearOrder,
    count: products.length
  }
  
  return (
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
  )
}

export { useCart, CartContextProvider }