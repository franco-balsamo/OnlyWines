import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <header>
            <h1>OnlyWines</h1>
            <nav>
                <a href="#">Tintos</a>
                <a href="#">Blancos</a>
                <a href="#">Espumantes</a>
                <a href="#">Contacto</a>
                <a href="#"><CartWidget/></a>
            </nav>
        </header>
    )
}

export default NavBar