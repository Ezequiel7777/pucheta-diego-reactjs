import React from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, clearCart, removeToCart } = useCart();
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
                <th>Acción</th>
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
                  
                </tbody>
              );
            })}
            
          </table>
        </div>
        <Link to="/cart/purchase-form">
                    <div className="flex">
                      <button className="btn btn-accent">
                        Continuar
                      </button>
                    </div>
                  </Link>
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
