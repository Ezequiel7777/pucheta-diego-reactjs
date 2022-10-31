import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

const Ticket = () => {
  const { products, clearCart } = useCart();

  const clearHandler = () => {
    clearCart();
  };


  const style = {
    width: "auto",
    height: "auto",
    backgroundColor: "#00bf92",
  };

  return (
    <div>
      <div className="flex justify-center mt-40">
        <div style={style} className="pt-1.5 px-1.5">
          <h1 className="text-center font-extrabold">Su orden de compra:</h1>
          {products.map((order, i) => {
            return (
              <div className="mt-10 ml-10 mr-10 font-bold mb-5">
                <li key={i}> Producto: {order.title} </li>
                <li> Cantidad comprada: {order.quantity} </li>
                <li> Precio por unidad: {order.price} </li>
                <li>Precio Total: {order.price * order.quantity} </li>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-5">
            <Link to="/">
                <div>
                  <button
                    type="submit"
                    name="submit"
                    onClick={clearHandler}
                    className="bg-blue-700	 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Finalizar Compra
                  </button>
                  </div>
                </Link>
        </div>
    </div>
  );
};

export default Ticket;
