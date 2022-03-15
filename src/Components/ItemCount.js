import react from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const ItemCount = (props) => {
    const [count, setCount] = useState(0);
    const restarCantidad = () => {
        setCount(previousCount => previousCount - 1);
    }
    const sumarCantidad = () => {
        setCount(previousCount => previousCount + 1);
    }
    const agregarProducto = () => {
        if (props.stock < count) {
            toast.error("no hay stock!");
        } else {
            agregar();
        }
    }
    const agregar = () => {
        toast.success("hay stock!");
    }
    
    return (
        <>
            <div className="contador">
                <button onClick={restarCantidad} disabled={count === 0}>-</button>
                <p>{count}</p>
                <button onClick={sumarCantidad} disabled={count === props.stock}>+</button>
            </div>   
            <button className="productBtn" onClick={agregarProducto} disabled={count === 0}>Comprar</button>
        </>
    )
}

export default ItemCount;
