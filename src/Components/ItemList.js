import { useEffect, useState } from "react";
import Item from "./Item";
import luigi from "../img/Luigi.jpeg";
import rutini from "../img/Rutini.jpeg";
import catena from "../img/Catena.jpeg";
import enemigo from "../img/elEnemigo.jpeg";

let Productos = [
    {
        id: 1,
        nombre: "Luigi Bosca Malbec",
        precio: 1000,
        img: luigi
    },
    {
        id: 2,
        nombre: "Rutini Malbec",
        precio: 1200,
        img: rutini
    },
    {
        id: 3,
        nombre: "DV Catena Malbec",
        precio: 1300,
        img: catena
        
    },
    {
        id: 4,
        nombre: "El Enemigo Malbec",
        precio: 1300,
        img: enemigo
        
    }
];

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = () => {
        return new Promise ((resp) => {
            setTimeout(() => resp(Productos),2000);
        });
    };

    useEffect(() => {
        setIsLoading(true);
        getProducts()
        .then ((data) => setProducts(data))
        .catch ((error) => console.error (error))
        .finally (() => setIsLoading(false));
    }, []);

    return (
        
            <div className="contenedorProductos" >
                {isLoading ? (
                    <div className="container">
                        <p>Cargando...</p>
                    </div>
                ) : (
                    products.map((producto) => <Item key={producto.id} producto={producto} />)
                )}
            </div>
        
    );
}

export default ItemList;