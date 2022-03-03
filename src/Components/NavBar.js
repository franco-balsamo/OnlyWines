import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <header>
            <h1>OnlyWines</h1>
            <nav>
                <ul>
                    <li>
                        <a href="">Tintos</a>
                    </li>
                    <li>
                        <a href="">Blancos</a>
                    </li>
                    <li>
                        <a href="">Espumantes</a>
                    </li>
                    <li>
                        <a href=""><CartWidget/></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar