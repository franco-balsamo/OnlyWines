// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import productosJson from "../data/BaseDeDatos";
import ItemDetailContainer from "./ItemDetailContainer"

/*const MiOnAdd = () => {
  console.log("OnAdd");
};*/

export  const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError] = useState(false);
  
  const getProducts = () => {
        return new Promise ((resp) => {
            setTimeout(() => resp(productosJson.products),2000);
        });
    };
  
  useEffect(() => {
        setIsLoading(true);
        getProducts()
        .then (() => {setProducts(productosJson.products)})
        .catch ((error) => setError (true))
        .finally (() => setIsLoading(false));
  }, []);
  
  return (
    <main className="container">
      <div className="banner w-100 vh-100">
        <h2 className="txtBanner">{props.greeting}</h2>
      </div>        
      <br/>
      <div>
          {isLoading ? <h2>Cargando, por favor aguarde</h2> : null}
          {error ? <h2>Error, intente nuevamente</h2> : null}
          <ItemList products={products}/>
      </div>
      <ItemDetailContainer/>                  
      {/*<ItemCount stock={8} initial={1} onAdd={MiOnAdd} />*/}
    </main>
  );
};

export default ItemListContainer;