import React from "react";
import { useCart } from  "../context/cartContext"
const CartWidget = () => {

const { count } = useCart()
  return (
      <div className="text-white bg-red-700 hover:bg-red-800  focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Carrito: {count}
      </div>
  );
};

export default CartWidget;
