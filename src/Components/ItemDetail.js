const ItemDetail = (props) => {
    if(props.product.pid == 0)
        return <></>
    
    return (
        <div className="contenedorProductos">
            <div className="cardBody">
                <img className="imgCard" src= {props.product.img} alt=""/>
                <p className="nameCard"> {props.product.nombre}</p><br/>
                <p>{props.product.descripcion}</p>
                <p className="priceCard"> $ {props.product.precio}</p><br/>
                <button className="btnCard">Comprar</button>
            </div>
        </div>
    );
}

export default ItemDetail;