import ItemDetail from "./itemDetailContainer";
import ListContainer from "./ItemListContainer";
import { useEffect, useState } from "react";

const recetas = [
  {
    id: 1,
    name: "Receta para veganos",
    price: "2000",
    description: "Este es un plan para veganos",
  }
];

const RecetasContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setItems(res);
    })}, []);

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(recetas);
      });
    });
  };

  return (
    <>
      {items.map(item => 
        <ItemDetail key={item.id} {...item} />
      )}
       {items.map(item => 
        <ListContainer key={item.id} {...item} />
      )}     
    </>
  );
};

export default  RecetasContainer
