
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { db } from "./Firebase";
import { query, where, getDocs, collection } from "firebase/firestore";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const { categoria } = useParams();
    
    useEffect(() => {
      if (categoria !== undefined) {
        const filteredDocuments = getDocs(query(collection(db, "productos"), where("categoria", "==", categoria)));
        filteredDocuments.then((snapshot) => {
            setProducts(snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })));
        })
        
        .catch ((rej) => {
          toast.error("Error al cargar los productos");
          setError (true);
        })
        
        .finally (() => { 
          setLoading(false);
        })
        
    } else {
        const documents = getDocs(collection(db, "productos"));
        documents.then((snapshot) => {
            setProducts(snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })));
        })
        
        .catch ((rej) => {
          toast.error("Error al cargar los productos");
          setError (true);
        })
        
        .finally (() => {
          setLoading(false);
        })
    }
  }, [categoria]);
    
    return (
        <>
          {loading ? <Spinner /> : <ItemList products={products}/>}
          {error ? <h2>Error, intente nuevamente</h2> : null}
          
        </>
    );
}
export default ItemListContainer;