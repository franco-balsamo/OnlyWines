import CartItem from "./CartItem";
import CartForm from "./CartForm";
import { cartContext } from "./CartContext";
import { useContext } from 'react';

const CartContainer = (props) => {
    const useCartContext = useContext(cartContext);
    const { deleteFromCart } = useCartContext;
    
    return (
        <div>
            <div className="dropShadow">
                <h2>Detalles productos</h2>
                {props.carrito.map(item => (
                    <CartItem key={item.product.id} item={item} deleteFromCart={deleteFromCart} />
                ))}
            </div>
            <div id="containerForm" className="dropShadow">
                <CartForm carrito={props.carrito} />
            </div>
        </div>
    )
}
export default CartContainer