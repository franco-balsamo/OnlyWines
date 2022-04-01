import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify";

export const cartContext = createContext([]);
const { Provider } = cartContext;

const CartProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [prodsTotal, setProdsTotal] = useState(0);
    
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("carrito"));
        if (carrito) {
            setCarrito(carrito);
            calculateTotals(carrito);
        }
    }, []);
    
    useEffect(() => {
        calculateTotals(carrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);
    
    const calculateTotals = (carrito) => {
        let precioTotal = 0;
        let prodsTotal = 0;
        carrito.forEach(item => {
            precioTotal += item.product.precio * item.count;
            prodsTotal += item.count;
        });
        setPrecioTotal(precioTotal);
        setProdsTotal(prodsTotal);
    }
    
    const clearStates = () => {
        setCarrito([]);
        setPrecioTotal(0);
        setProdsTotal(0);
    }
    
    const cartCheckout = (orderId) => {
        toast.success("Congratulations! Your purchase has been completed! The order id is: " + orderId, { autoClose: false, });
        clearStates();
    }
    
    const addToCart = (product, count) => {
        let cartProduct = { product, count };
        let carritoTemporal = [];
        
        if (isInCart(product)) {
            cartProduct = carrito.find(item => item.product.nombre === product.nombre)
            if (cartProduct.count + count <= product.stock) {
                cartProduct.count += count;
                toast.success("You've added " + count + " items to the cart!");
            } else {
                toast.error("You can't add more than " + product.stock + " units of " + product.nombre + " to your cart!");
                return;
            }
        } else {  
            toast.success("You've added " + count + " items to the cart!");          
            carritoTemporal = [cartProduct, ...carrito]
            setCarrito(carritoTemporal)
        }
    }
    
    const clear = () => {
        clearStates();
        localStorage.removeItem("carrito");
        toast.info("Producto eliminado")
        
    }
    
    const deleteFromCart = (product) => {
        if (isInCart(product)) {
            const carritoTemporal = carrito.filter(item => item.product !== product);
            setCarrito(carritoTemporal);
            toast.info(product.nombre + " removed from your cart.");
            if (carritoTemporal.length === 0) {
                clear();
            }
        }
    }
    
    const isInCart = (product) => {
        return carrito && carrito.some(item => item.product.nombre === product.nombre);
    }
    
    return (
        <Provider value={{ carrito, deleteFromCart, addToCart, clear, precioTotal, prodsTotal, cartCheckout }}>
            {children}
        </Provider>
    )
}
export default CartProvider