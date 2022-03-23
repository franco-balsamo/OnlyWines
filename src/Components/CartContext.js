import { createContext, useState } from "react"
import { toast } from "react-toastify";

export const cartContext = createContext([]);
const { Provider } = cartContext;

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [prodsTotal, setProdsTotal] = useState(0);

    const cartCheckout = ()=>{
        toast.success("Compra exitosa!");
    }

    const addToCart = (product, count) => {
        let cartProduct = { product, count };
        let carritoTemporal = [];

        if (isInCart(product)) {
            cartProduct = carrito.find(item => item.product === product)
            cartProduct.count = cartProduct.count + count
            carritoTemporal = [...carrito]
        } else {
            carritoTemporal = [cartProduct, ...carrito]
        }
        setCarrito(carritoTemporal)

        let temporalPrecioTotal = 0;
        let temporalProdsTotal = 0;

        temporalPrecioTotal = precioTotal;
        temporalPrecioTotal += (product.precio * count);
        setPrecioTotal(temporalPrecioTotal);

        temporalProdsTotal = prodsTotal;
        temporalProdsTotal += count;
        setProdsTotal(temporalProdsTotal);
    }

    const clear = () => {
        setCarrito([]);
        setPrecioTotal(0);
        setProdsTotal(0);
        
    }

    const deleteFromCart = (product) => {
        if (isInCart(product)) {
            let temporalPrecioTotal  = 0;
            let temporalProdsTotal = 0;
            const carritoTemporal = carrito.filter(item => item.product !== product);

            carritoTemporal.forEach((item) => {
                temporalPrecioTotal  += (item.product.precio * item.count);
                setPrecioTotal(temporalPrecioTotal );

                temporalProdsTotal += item.count;
                setProdsTotal(temporalProdsTotal);
            })

            setCarrito(carritoTemporal);
            toast.info(product.nombre + " eliminado de su carrito.");

            if (carritoTemporal.length === 0){
                clear();
            }
        }
    }

    const isInCart = (product) => {
        return carrito && carrito.some(item => item.product === product);
    }

    return (
        <Provider value={{ carrito, deleteFromCart, addToCart, clear, precioTotal, prodsTotal, cartCheckout }}>
            {children}
        </Provider>
    )
}

export default CartProvider