import react from "react";
import { useState } from "react";

const ItemCount = (props) => {
    const [cantidad, setCantidad] = useState(props.initial);
    
    const handleIncrease = () => {
        if (cantidad >= props.stock) {
            setCantidad(cantidad);
        } else {
            setCantidad(cantidad + 1);
        }
    };
    
    const handleSubtract = () => {
        if (props.initial >= cantidad) {
            setCantidad(cantidad);
        } else {
            setCantidad(cantidad - 1);
        }
    };
    
    return (
        <p>
            <button onClick={handleSubtract}>-</button> Cantidad:
            {cantidad} <button onClick={handleIncrease}>+</button>
            <br/><br/>
            <button onClick={props.onAdd}>Agregar al carrito</button>
        </p>
    );
    
};

export default ItemCount;
