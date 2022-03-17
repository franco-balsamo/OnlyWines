import { productosJson } from "../data/BaseDeDatos";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const { categoria } = useParams();
    
    useEffect(() => {
        setLoading(true);
        const getProducts = () => {
          return new Promise ((res, rej) => {
              setTimeout(() => res(productosJson),2000);
          });
        }
        
        getProducts()
        .then ((res) => {
          if (categoria !== undefined) {
            const productsFiltered = productosJson.filter(product => product.categoria === categoria)
            setProducts (productsFiltered)
          } else {
            setProducts(productosJson);
          }
        })
        .catch ((rej) =>{
          toast.error("Error al cargar los productos");
          setError (true);
        })
        .finally (() => setLoading(false));
    }, [categoria]);
    
    return (
        <div>
          {loading ? <h2>Cargando, por favor aguarde</h2> : <ItemList products={products}/>}
          {error ? <h2>Error, intente nuevamente</h2> : null}
          
        </div>
    );
}
export default ItemListContainer;