import { Button } from "@mui/material";
import { useContext } from 'react';
import { cartContext } from "./CartContext";


const CartItem = (props) => {
    const useCartContext = useContext(cartContext);
    const { deleteFromCart } = useCartContext;

    return (
        <div key={props.item.product.id} id="" className="dropShadow cart">
            <div className="cartText">
                <img src={props.item.product.imagen} />
                <span><p>{props.item.product.nombre}</p></span>
                <span><p>${props.item.product.precio} x {props.item.count} unidades</p></span>
                <span><h3>Total:</h3> <p>${props.item.product.precio * props.item.count}</p></span>
            </div>
            <div className="cartButtons">
                <Button onClick={() => deleteFromCart(props.item.product)} variant="contained" color="error">Eliminar producto</Button>
            </div>
        </div>)
}
export default CartItem