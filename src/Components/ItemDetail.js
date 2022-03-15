import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return (
        <section className="sectionProductDetailed">
            <div className="containerProductDetailed">
                <img className="productImg" src= {props.object.img} alt=""/>
                <div className="productBody">
                    <p className="productName"> {props.object.nombre}</p><br/>
                    <p className="productDescription">{props.object.descripcion}</p>
                    <p className="productPrice">  {"$" + props.object.precio}</p><br/>
                    <div className="productStock">
                        <p className="parrafoStock">En Stock</p>
                        <ItemCount stock={props.stock} slug={props.slug}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail;