import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div className="cardProductos">
            <Link to={/item/ + props.slug}><img className="imgCard" src= {props.img} alt=""/></Link>
            <p className="nameCard"> {props.nombre}</p><br/>
            <p className="priceCard">  {"$" + props.precio}</p><br/>
            <button className="btnCard">Comprar</button>
        </div>
    )
}
export default Item;