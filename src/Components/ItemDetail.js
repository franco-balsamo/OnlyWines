import ItemCount from "./ItemCount";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom"

const ItemDetail = (props) => {
    const [countDesaparece, setCountDesaparece] = useState(false);
    const [unidadesCompradas, setUnidadesCompradas] = useState(0);
    
    const onAdd = (activeCounter) => {
        if (activeCounter !== undefined) {
            setCountDesaparece(true);
            setUnidadesCompradas(activeCounter);
        }
        toast.success("Has agregado " + activeCounter + " artículos al carrito!");
    }
    
    return (
        
            <div className="containerProductDetailed">
                <div>
                    <img className="productImg" src= {props.object.img} alt=""/>
                </div>
                <div className="productBody">
                    <p className="productName"> {props.object.nombre}</p><br/>
                    <p className="productDescription">{props.object.descripcion}</p>
                    <p className="productPrice">  {"$" + props.object.precio}</p><br/>
                    <p> Stock: {props.object.stock}</p>
                    {countDesaparece ?
                        <Link to="/cart/"><button>Terminar mi compra</button></Link> :
                        <ItemCount initial={1} stock={props.object.stock} onAdd={onAdd} />}
                </div>
            </div>
        
    )
}

export default ItemDetail;