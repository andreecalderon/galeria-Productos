import { productosApi } from "../services/api.js";
import { crearProducto } from "../moduls/productos.js";

async function MostrarResultados() {
    try {
        let datos = await productosApi();
        console.log(datos);
        todosLosProductos(datos);
    } catch (error) {
        console.error("Error:", error);
    }
}

function todosLosProductos(datos) {
    let DOM = document.querySelector("#root");

    if (!DOM) {
        console.error("Error: No se encontró el contenedor con id 'root'");
        return;
    }

    datos.forEach(element => {
        const producto = crearProducto(element.image, element.title, element.price, element.description);
        DOM.appendChild(producto);
    });
}

export { MostrarResultados };