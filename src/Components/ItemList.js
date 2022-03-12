import Item from "./Item";

const ItemList = (props) => {
    return (
        <div className="contenedorProductos">
            {props.products.map((p) => {
                return <Item key={p.id} product={p}/>
            })}
        </div>
        
    )
}

export default ItemList;