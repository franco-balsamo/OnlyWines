import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";


function App () {
    return (
        <BrowserRouter>
            <NavBar/>
            <Main greeting="OnlyWines" />
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App