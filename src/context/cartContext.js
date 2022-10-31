import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext({
  products: [],
  addToCart: () => {},
  clearCart: () => {},
  removeToCart: () => {},
  count: 0,
})

const useCart = () => {
    return useContext(CartContext)
}

const CartContextProvider = ( {children} ) => {

  const [products, setProducts] = useLocalStorage('products', [])

  const addToCart = ( product ) => {
    setProducts( products => [...products, product] )
  }

  const clearCart = () => {
    setProducts([])
  }
 
  const removeToCart = (item) => { 
      const productsCartRestantes = products.filter(it => it.title !== item.title)  
      setProducts(productsCartRestantes)
  }

  const context = {
    products: products,
    addToCart: addToCart,
    clearCart: clearCart,
    removeToCart: removeToCart,
    count: products.length
  }
  
  return (
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
  )
}

export { useCart, CartContextProvider }