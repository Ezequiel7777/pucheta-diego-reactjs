import React from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage"
import { addDoc, collection, getFirestore} from "firebase/firestore"

export const CartTable = ({title, price, quantity}) => {

   return ( 
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{title}</td>
              <td>{price}</td>
              <td>{quantity}</td>
            </tr>
          </tbody>
        </table>
    </div>
   )
};

const Cart = () => {

  const { products, clearCart } = useCart();

  const addToFireStore = () => {
    const db = getFirestore()
    const orderCollection = collection(db, "order")
    addDoc(orderCollection, ...products)
    clearCart()
  }

  
  return (
    <div>
      <h1 className="text-center mt-20 mb-20 text-xl font-extrabold">Carrito de compreas</h1>
      <button className="btn btn-accent" onClick={clearCart}>Limpiar carrito</button>
    
      {products.map((product, i) => {
        return <CartTable key={i} {...product} />
      })}
        <Link to="/checkout-form">
        <button className="btn btn-accent" onClick={addToFireStore}>Pagar</button>
        </Link>
    </div>
  );
};
export default Cart;
