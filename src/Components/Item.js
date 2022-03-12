const Item = (props) => {
    return (
        <div className="cardBody">
            <img className="imgCard" src= {props.product.img} alt=""/>
            <p className="nameCard"> {props.product.nombre}</p><br/>
            <p className="priceCard"> $ {props.product.precio}</p><br/>
            <button className="btnCard">Ver más</button>
        </div>
    );
};

export default Item;