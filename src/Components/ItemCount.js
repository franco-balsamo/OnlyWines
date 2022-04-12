import { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const restar = () => {
        setCount(previousCount => previousCount - 1);
    }
    const sumar = () => {
        setCount(previousCount => previousCount + 1);
    }
    const addToCart = () => {
        props.onAdd(count);
    }
    
    return (
        <>  
            <div className="containerCount">
                <ButtonGroup className="dropShadow" aria-label="text button group">
                <Button onClick={restar} variant="contained" color="error" disabled={count === 0}>-</Button>
                <p className="parrafoCount">{count}</p>
                <Button onClick={sumar} variant="contained" color="success" disabled={count === props.stock}>+</Button>
                </ButtonGroup>
            </div>
            <div className="btnCount">
            <button className="Btn" onClick={addToCart} disabled={count === 0}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount
