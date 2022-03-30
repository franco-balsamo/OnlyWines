import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

import { db } from "./Firebase";
import { query, where, getDocs, collection } from "firebase/firestore";


const ItemDetailContainer = (props) => {
    const [object, setObject] = useState({});
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false);
    const { slug } = useParams();
    
    useEffect(() => {
        const filteredDocuments = getDocs(query(collection(db, "productos"), where("slug", "==", slug)));

        filteredDocuments.then((snapshot) => {
            setObject(snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })));
        })

        .catch ((rej) =>{
            toast.error("Error al cargar los productos");
            setError (true);
        })
        .finally (() => setLoading(false));
    }, [slug]);
    
    return (
        <>
            {loading ? <Spinner/> : <>{object.map((product) => { return <ItemDetail key={product.id} object={product} /> })}</>}
            {error ? <h2>Error, intente nuevamente</h2> : null}
            
        </>
    );
}
export default ItemDetailContainer;