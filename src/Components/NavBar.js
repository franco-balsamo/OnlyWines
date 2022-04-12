import CartWidget from "./CartWidget";
import { Link, NavLink} from "react-router-dom";

function NavBar () {
    return (
        <header>
            <h1><Link to="/">OnlyWines</Link></h1>
            <nav >
                <input type="checkbox" id="nav"></input>
                <label htmlFor="nav">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>   
                <ul className="menu">
                    <li><NavLink to="/categoria/tinto">Tintos</NavLink></li>
                    <li><NavLink to="/categoria/blanco">Blancos</NavLink></li>
                    <li><NavLink to="/categoria/rosado">Rosados</NavLink></li>
                    <li><NavLink to="/cart/"><CartWidget/></NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar