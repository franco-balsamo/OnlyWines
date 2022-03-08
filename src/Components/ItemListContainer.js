// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

/*const MiOnAdd = () => {
  console.log("OnAdd");
};*/


export  const ItemListContainer = (props) => {
  return (
    <main className="container">
        <div className="banner">
        <h2 className="txtBanner">{props.greeting}</h2>
        </div>        
        <br/>
        <ItemList/>
        {/*<ItemCount stock={8} initial={1} onAdd={MiOnAdd} />*/}
    </main>
  );
};

export default ItemListContainer;
