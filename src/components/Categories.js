import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    collection,
    query,
    where,
    getFirestore,
    getDocs,
  } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const Card = ({ id, title, description, price, image, categoryId }) => {
    return (
      <>
        <div>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src={image}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
              <Link to={`/planes-alimentarios/${categoryId}/${id}`}>
              <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ver más
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                </div>
                </Link>
              </div>
            </div>
          </div>
       </> 
    );
  };


const Categories = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getItems()
  }, [category]);

const getItems = () => {
    const db = getFirestore();
    const q = query(collection(db, "items"), where("categoryId", "==", category));
    getDocs(q).then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setProducts(data)
    })
}
  return (
    <div className="categories flex justify-center justify-evenly mt-40">
        <div className="categories__list">
          {products.map((product) => {
             return <Card  key={product.id} {...product}/>;
          })}
        </div>
    </div>
  );
};

export default Categories;
