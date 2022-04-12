import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import { Routes, Route} from "react-router-dom";

const Main = (props) => {
    return (
    <main className="container">  
        <div className="banner">
            <h2 className="txtBanner">{props.greeting}</h2>
        </div>        
        <br/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route  path="/item/:slug" element={<ItemDetailContainer/>}/>
        </Routes>
    </main>
    )
}

export default Main