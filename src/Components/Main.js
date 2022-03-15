import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidget from "./CartWidget";
import { Routes, Route} from "react-router-dom";

const Main = (props) => {
    return (
    <>
    <main className="container">  
        <div className="banner w-100 vh-100">
            <h2 className="txtBanner">{props.greeting}</h2>
        </div>        
        <br/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
            <Route path="/CartWidget" element={<CartWidget/>}/>
            <Route  path="/item/:slug" element={<ItemDetailContainer/>}/>
        </Routes>
    </main>
    </>
    )
}

export default Main