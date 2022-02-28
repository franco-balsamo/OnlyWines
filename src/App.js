import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";


function App () {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="OnlyWines" />
            <Footer/>
        </>
    );
};

export default App;