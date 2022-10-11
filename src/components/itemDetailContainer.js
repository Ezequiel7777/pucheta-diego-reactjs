import React from 'react'

const ItemDetail = ({ name, description, price }) => {

  return (
    <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={`assets/plan-detalle.jpg`}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
