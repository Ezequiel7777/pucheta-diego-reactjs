import React from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartTable = ({ id, title, price, quantity }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
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
  );
};

const Cart = () => {
  const { products, clearCart, removeToCart } = useCart();
  console.log(useCart());

  const addToFireStore = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "order");
    addDoc(orderCollection, ...products);
    clearCart();
  };

  <Link to="/checkout">
    <button className="btn btn-accent" onClick={addToFireStore}>
      Continuar
    </button>
  </Link>;
  if (products.length > 0) {
    return (
      <div>
        <h1 className="text-center mt-20 mb-20 text-xl font-extrabold">
          Carrito de compreas
        </h1>
        <button className="btn btn-accent" onClick={clearCart}>
          Limpiar carrito
        </button>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio por unidad</th>
                <th>Cantidad</th>
                <th>Precio total</th>
              </tr>
            </thead>
            {products.map((product, i) => {
              console.log(product.title);
              return (
                <tbody key={i}>
                  <tr>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price * product.quantity}</td>
                    <td>
                      <div className="flex">
                        <button
                          className="btn btn-accent"
                          onClick={() => removeToCart(product)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                  <Link to="purchase-form">
                    <button className="btn btn-accent">Continuar</button>
                  </Link>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center mt-20 mb-2 text-xl font-extrabold">
          Ups su carrito se encuentra vacio.
        </h1>
        <h3 className="text-center  text-xl font-extrabold">
          ¿Desea agregar productos?
        </h3>
        <Link to="/">
          <div className="flex">
            <button className="btn btn-accent">Navegar por el catálogo</button>
          </div>
        </Link>
      </div>
    );
  }
};
export default Cart;
