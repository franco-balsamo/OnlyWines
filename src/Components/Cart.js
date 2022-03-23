import { cartContext } from "./CartContext";
import { useContext } from 'react';
import { Link } from "react-router-dom"


const Cart = () => {

    const useCartContext = useContext(cartContext);
    const { carrito, deleteFromCart, clear, precioTotal, prodsTotal, cartCheckout } = useCartContext;

    return (
        <>
            <div className="container">
                {carrito.length === 0 ? <Link to="/"><button className="Btn"><h2>Carrito vacio, volver a los productos</h2></button></Link> :
                    <>{
                        carrito.map(item => (
                            <div key={item.product.id}>
                                <div >
                                    <img src={item.product.img} />
                                    <span><p>{item.product.nombre}</p></span>
                                    <span><p>${item.product.precio} x {item.count} unidades</p></span>
                                    <span><h3>Total:</h3> <p>${item.product.precio * item.count}</p></span>
                                </div>
                                <div>
                                    <button className="Btn" onClick={() => deleteFromCart(item.product)}>Eliminar producto</button>
                                </div>
                            </div>
                        ))
                    }
                        <div>
                            <div>
                                <h3>Total del carrito: ${precioTotal}</h3>
                                <h3>Productos totales: {prodsTotal}</h3>
                            </div>
                            <div>
                                <button className="Btn" onClick={cartCheckout}>Finalizar mi compra</button>
                                <button className="Btn" onClick={clear}>Vaciar carrito</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Cart
