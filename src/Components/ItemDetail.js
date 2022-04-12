import ItemCount from "./ItemCount";
import { cartContext } from "./CartContext";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"

const ItemDetail = (props) => {
    const [ocultarBtn, setOcultarBtn] = useState(true);
    
    const useCartContext = useContext(cartContext);
    const { addToCart } = useCartContext;
    
    const onAdd = (activarContador) => {
        if (activarContador !== undefined) {
            setOcultarBtn(false);
            addToCart(props.object, activarContador);
        }
    }
    
    return (
        <div className="containerProductDetailed">
            <div className="dropShadow">
                <img className="productImg" src= {props.object.imagen} alt=""/>
            </div>
            <div className="productBody dropShadow">
                <p className="productName"> {props.object.nombre}</p><br/>
                <p className="productDescription">{props.object.descripcion}</p>
                <p className="productPrice">  {"$" + props.object.precio}</p><br/>
                <p className="productStock"> Stock: {props.object.stock}</p>
                <ItemCount initial={1} stock={props.object.stock} onAdd={onAdd} />
                { ocultarBtn || <Link to="/cart/" className="btnCount"><button className="Btn">Comprar</button></Link>}
            </div>
        </div>
    )
}

export default ItemDetail