import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
const Ticket = () => {
  const { orders, products, clearOrder, clearCart } = useCart();

  const clearHandler = () => {
    clearOrder();
    clearCart();
  };

  const style = {
    width: "500px",
    height: "300px",
    backgroundColor: "#00bf92",
  };

  return (
    <div style={style}>
      <h1>Su orden de compra:</h1>
      {orders.map((order, i) => {
        return (
          <div key={i}>
            <li> Producto: {order.title} </li>
            <li> Precio por unidad: {order.price} </li>
            <li> Cantidad comprada: {order.quantity} </li>
          </div>
        );
      })}
      {products.map((product, q) => {
        return (
          <div key={q}>
            <li> Precio total: {product.price * product.quantity} </li>
          </div>
        );
      })}
      <Link to="/">
        <button
          type="submit"
          name="submit"
          onClick={clearHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Finalizar Compra
        </button>
      </Link>
    </div>
  );
};

export default Ticket;
