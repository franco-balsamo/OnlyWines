import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Components/CartContext";

function App () {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <Main greeting="OnlyWines" />
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App