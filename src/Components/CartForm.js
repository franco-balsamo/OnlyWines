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
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [telefono, setTelefono] = useState("");
    const [validarNombre, setValidarNombre] = useState(false);
    const [validarEmail, setValidarEmail] = useState(false);
    const [validarEmailConf, setValidarEmailConf] = useState(false);
    const [validarTelefono, setValidarTelefono] = useState(false);


    const handleCheckout = () => {
        const newOrder = {
            comprador: {
                nombre: nombre,
                telefono: telefono,
                email: email
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
        setNombre(e.target.value);
        setValidarNombre(validator.isAlpha(nombre, "es-ES", { ignore: " " }));
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setValidarEmail(validator.isEmail(email));
    }

    const handleEmailConfChange = (e) => {
        setEmailConf(e.target.value);
    }

    useEffect(() => {
        setValidarEmailConf(validator.equals(email, emailConf));
    }, [email, emailConf]);

    const handlePhoneChange = (e) => {
        setTelefono(e.target.value);
        setValidarTelefono(validator.isNumeric(telefono, "es-ES"));
    }

    return (
        <>
            <h2 className="h2Form">Verificar información:</h2>
            <TextField className="itemForm" error={nombre !== "" && !validarNombre} required variant="filled" label="Nombre Completo" onChange={handleNameChange} value={nombre} />
            <TextField className="itemForm" error={telefono !== "" && !validarTelefono} required variant="filled" label="Numero de telefono" onChange={handlePhoneChange} value={telefono} />
            <TextField className="itemForm" error={email !== "" && !validarEmail} required variant="filled" label="Correo electronico" onChange={handleEmailChange} value={email} />
            <TextField className="itemForm" error={emailConf !== "" && !validarEmailConf} required variant="filled" label="Confirmar correo electronico" onChange={handleEmailConfChange} value={emailConf} />
            <div className="dropShadow">
                <div className="textoForm">
                    <h3 className="h3Form">Total: ${precioTotal} </h3>
                    <h3 className="h3Form">Total Productos: {prodsTotal}</h3>
                </div>
                <div className="containerBtnForm">
                    <Button className="btnForm" onClick={handleCheckout} variant="contained" disabled={(!validarNombre || !validarEmail || !validarEmailConf || !validarTelefono)} color="success"> Finalizar Compra</Button>
                    <Button className="btnForm" onClick={clear} variant="contained" color="error">Vaciar carrito</Button>
                </div>
            </div>
        </>
    )
}
export default CartCheckoutForm