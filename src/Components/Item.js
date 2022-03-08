const Item = ({ producto }) => {
    return (
        <div className="cardBody">
            <img className="imgCard" src= {producto.img} alt=""/>
            <p className="nameCard"> {producto.nombre}</p><br/>
            <p className="priceCard"> $ {producto.precio}</p><br/>
            <button className="btnCard">Ver más</button>
        </div>
    );
};

export default Item;