import React, { useState } from "react";
import { useCart } from "../context/cartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Form = () => {
  const { products } = useCart();
  const addToFireStore = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "order");
    addDoc(orderCollection, ...products);
  };

  const handleChange = (event) => {
    const mail = document.getElementById("mail").value;

    const name = document.getElementById("name").value;

    const apellido = document.getElementById("apellido").value;
    

    if (mail == "") {
      event.preventDefault();
      alert("Ingrese un email válido");
    } else if (name == "") {
      event.preventDefault();
      alert("Ingrese su nombre.");
    } else if (apellido == "") {
      event.preventDefault();
      alert("Ingrese su apellido.");
    } else if (name !== "" && mail !== "" && apellido) {
      addToFireStore();
    }
  };
  

  return (
    <>
    <h1 className="text-center mt-40 text-lg font-semibold">Ingrese sus datos para Finalizar la reserva</h1>
      <div className="w-full md:flex md:justify-center mb-6 mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido
            </label>
            <input
              name="apellido"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="apellido"
              type="text"
              placeholder="Apellido"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mail"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="mail"
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>
          <Link to="checkout-order">
          <button
            type="submit"
            name="submit"
            onClick={handleChange}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Continuar
          </button>
        </Link>
        </form>
        
      </div>
    </>
  );
};
export default Form;
