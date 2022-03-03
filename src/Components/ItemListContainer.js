import ItemCount from "./ItemCount";

const MiOnAdd = () => {
  console.log("OnAdd");
};

export  const ItemListContainer = (props) => {
  return (
    <main className="container">
        <h2>Bienvenido a {props.greeting}</h2>
        <br/>
        <ItemCount stock={8} initial={1} onAdd={MiOnAdd} />
    </main>
  );
};

export default ItemListContainer;