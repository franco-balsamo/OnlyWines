import luigi from "../img/Luigi.jpeg";
import rutini from "../img/Rutini.jpeg";
import catena from "../img/Catena.jpeg";
import enemigo from "../img/elEnemigo.jpeg";

const Productos = () => {
    
    return (
    [
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
])};

export default Productos;