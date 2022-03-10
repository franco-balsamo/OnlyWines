import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <header>
            <h1>OnlyWines</h1>
            <nav>
                <input type="checkbox" id="nav"></input>
                <label htmlFor="nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>   
                <ul className="menu">
                    <li><a href="">Tintos</a></li>
                    <li><a href="">Blancos</a></li>
                    <li><a href="">Espumantes</a></li>
                    <li><a href=""><CartWidget/></a></li>
                </ul>
            </nav>
            
            
        </header>
    )
}

export default NavBar