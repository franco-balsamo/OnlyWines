import Item from "./Item";

const ItemList = (props) => {
    return (
        <section className="sectionProductos">
        <div className="contenedorProductos">
            {props.products.map((product) => {
                return <Item key={product.id} nombre={product.nombre} precio={product.precio} stock={product.stock} imagen={product.imagen} slug={product.slug} />
            })}
        </div>
        </section>
    )
}
export default ItemList;