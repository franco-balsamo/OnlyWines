import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import { productosJson } from "../data/BaseDeDatos";


const ItemDetailContainer = (props) => {
    const [object, setObject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const { slug } = useParams();
    
    useEffect(() => {
        setLoading(true);
        const getProducts =  new Promise ((res, rej) => {
                setTimeout(() =>{ res(productosJson);},100)
            })
        
        getProducts
        .then((res) => {
            let result = productosJson.find(product => {
                return product.slug === slug;
            })
            setObject(result);
        })
        .catch ((rej) =>{
            toast.error("Error al cargar los productos");
            setError (true);
        })
        .finally (() => setLoading(false));
    }, []);
    
    return (
        <div>
            {loading ? <h2>Cargando, por favor aguarde</h2> : <ItemDetail object={object}/>}
            {error ? <h2>Error, intente nuevamente</h2> : null}
            
        </div>
    );
}
export default ItemDetailContainer;