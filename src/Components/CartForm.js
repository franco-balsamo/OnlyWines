import { db } from "./Firebase";
import { cartContext } from "./CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState, useEffect } from 'react';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import validator from "validator";


const CartCheckoutForm = (props) => {
    const useCartContext = useContext(cartContext);
    const { clear, precioTotal, prodsTotal, cartCheckout } = useCartContext;
    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyerEmailConf, setBuyerEmailConf] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validEmailConf, setValidEmailConf] = useState(false);
    const [validPhone, setValidPhone] = useState(false);


    const handleCheckout = () => {
        const newOrder = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: props.carrito,
            date: serverTimestamp(),
            total: precioTotal
        }
        const ordersCollection = collection(db, "orders");
        const order = addDoc(ordersCollection, newOrder);
        order.then((res) => {
            const orderId = res.id;
            cartCheckout(orderId);
        });
    }

    const handleNameChange = (e) => {
        setBuyerName(e.target.value);
        setValidName(validator.isAlpha(buyerName, "es-ES", { ignore: " " }));
    }

    const handleEmailChange = (e) => {
        setBuyerEmail(e.target.value);
        setValidEmail(validator.isEmail(buyerEmail));
    }

    const handleEmailConfChange = (e) => {
        setBuyerEmailConf(e.target.value);
    }

    useEffect(() => {
        setValidEmailConf(validator.equals(buyerEmail, buyerEmailConf));
    }, [buyerEmail, buyerEmailConf]);

    const handlePhoneChange = (e) => {
        setBuyerPhone(e.target.value);
        setValidPhone(validator.isNumeric(buyerPhone, "es-ES"));
    }

    return (
        <>
            <h2>Verificar información:</h2>
            <TextField className="formItems" error={buyerName !== "" && !validName} required variant="filled" label="Nombre Completo" onChange={handleNameChange} value={buyerName} />
            <TextField className="formItems" error={buyerPhone !== "" && !validPhone} required variant="filled" label="Numero de telefono" onChange={handlePhoneChange} value={buyerPhone} />
            <TextField className="formItems" error={buyerEmail !== "" && !validEmail} required variant="filled" label="Correo electronico" onChange={handleEmailChange} value={buyerEmail} />
            <TextField className="formItems" error={buyerEmailConf !== "" && !validEmailConf} required variant="filled" label="Confirmar correo electronico" onChange={handleEmailConfChange} value={buyerEmailConf} />
            <div>
                <div>
                    <h3>Total: ${precioTotal} </h3>
                    <h3>Total Productos: {prodsTotal}</h3>
                </div>
                <div>
                    <Button onClick={handleCheckout} variant="contained" disabled={(!validName || !validEmail || !validEmailConf || !validPhone)} color="success"> Finalizar Compra</Button>
                    <Button onClick={clear} variant="contained" color="error">Vaciar carrito</Button>
                </div>
            </div>
        </>
    )
}
export default CartCheckoutForm