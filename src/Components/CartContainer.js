import CartItem from "./CartItem";
import CartForm from "./CartForm";
import { cartContext } from "./CartContext";
import { useContext } from 'react';

const CartContainer = (props) => {
    const useCartContext = useContext(cartContext);
    const { deleteFromCart } = useCartContext;
    
    return (
        <div>
            <div>
                <h2>Cart Detail</h2>
                {props.carrito.map(item => (
                    <CartItem key={item.product.id} item={item} deleteFromCart={deleteFromCart} />
                ))}
            </div>
            <div>
                <CartForm carrito={props.carrito} />
            </div>
        </div>
    )
}
export default CartContainer