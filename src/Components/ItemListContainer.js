// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import Productos from "../data/BaseDeDatos";

/*const MiOnAdd = () => {
  console.log("OnAdd");
};*/

export  const ItemListContainer = (props) => {
  const [producto, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const getProducts = () => {
        return new Promise ((resp) => {
            setTimeout(() => resp(Productos),2000);
        });
    };
  
  useEffect(() => {
        setIsLoading(true);
        getProducts()
        .then ((data) => setProducts(data))
        .catch ((error) => console.error (error))
        .finally (() => setIsLoading(false));
  }, []);
  
  return (
    <main className="container">
      <div className="banner w-100 vh-100">
        <h2 className="txtBanner">{props.greeting}</h2>
      </div>        
      <br/>
      <>
        <p>{isLoading ? "Cargando..." : "Ya tenes los productos"}</p>
        <ItemList productos={producto}/>
      </>
      {/*<ItemCount stock={8} initial={1} onAdd={MiOnAdd} />*/}
    </main>
  );
};

export default ItemListContainer;