import { collection, getDoc, doc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";

const ItemDetail = () => {

  const style = {
    fontSize: "1.5rem",
  };


  const { id } = useParams();

  const [product, setProducts] = useState({});
  const { addToCart } = useCart();

  const [quantity, setQnt] = useState(1);
  console.log(product.stock);
  useEffect(() => {
    getProduct();
  }, []);

  const addQt = () => {
    if (quantity < product.stock) {
      setQnt(quantity + 1);
    }
  };

  const resQt = () => {
    if (quantity <= 1) {
      return;
    }
    setQnt(quantity - 1);
  };

  const addHandler = () => {
    addToCart({
      title: product.title,
      price: product.price,
      category: product.categoryId,
      quantity: quantity,
    });
  };
  const getProduct = () => {
    const db = getFirestore();
    const productsCollection = collection(db, "items");
    const docRef = doc(productsCollection, id);
    getDoc(docRef).then((res) => {
      setProducts(res.data());
    });
  };

  return (
    <div className="flex justify-center mt-40">
      <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={product.image} alt="" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <div className="flex justify-evenly">
        <button onClick={resQt} style={style}>-</button>
        <span>{quantity}</span>
        <button onClick={addQt} style={style}>+</button>
        <button
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={addHandler}
        >
          Agregar al carrito
        </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
