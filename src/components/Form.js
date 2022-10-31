import React from "react";
import { useCart } from "../context/cartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Form = () => {
    const { products, clearCart} = useCart();

    const addToFireStore = () => {
      const db = getFirestore();
      const orderCollection = collection(db, "order");
      addDoc(orderCollection, ...products);
      clearCart();
    };

  const getUser = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
  };

  const handleChange = (event) => {
    console.log("handleChange value", event.target.value);
    console.log("handleChange name", event.target.name);

    var mail = document.getElementById("mail").value;

    var name = document.getElementById("name").value;

    var apellido = document.getElementById("apellido").value;

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
        addToFireStore()
    }
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              onChange={getUser}
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
              onChange={getUser}
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
              onChange={getUser}
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>
        </form>
        <Link to="checkout-order">
        <button
          type="submit"
          name="submit"
          onClick={handleChange}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Finalizar Compra
        </button>
        </Link>
      </div>
    </>
  );
};
export default Form;
