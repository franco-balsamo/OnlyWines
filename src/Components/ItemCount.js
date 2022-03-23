import { useState } from "react";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const restarCantidad = () => {
        setCount(previousCount => previousCount - 1);
    }
    const sumarCantidad = () => {
        setCount(previousCount => previousCount + 1);
    }
    const addToCart = () => {
        props.onAdd(count);
    }

    
    return (
        <>  
            <div className="contador">
                <button onClick={restarCantidad} disabled={count === 0}>-</button>
                <p>{count}</p>
                <button onClick={sumarCantidad} disabled={count === props.stock}>+</button>
            </div>   
            <button className="Btn" onClick={addToCart} disabled={count === 0}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;
