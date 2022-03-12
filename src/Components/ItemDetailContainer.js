import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import productosJson from "../data/BaseDeDatos";

export const ItemDetailContainer = (props) => {
    const [product, setProducts] = useState({pid: 0});
    
    const getItem = (item) => {
        new Promise((r) => { setTimeout(() => { r() }, 2000) })
            .then(() => { setProducts(productosJson.products[item]) })
    }

    useEffect(() => {
        getItem(0)
    }, [])
    
    return (
        <div>
            <ItemDetail key={product.pid} product={product} />
        </div>
    )
};
export default ItemDetailContainer;