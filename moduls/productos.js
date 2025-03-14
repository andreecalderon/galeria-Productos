function crearProducto(imgSrc, nombre, precio, descripcion, id) {
    const producto = document.createElement("div");
    producto.classList.add("producto");

  
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = nombre;
    producto.appendChild(img);

    const titulo = document.createElement("h2");
    titulo.textContent = nombre; 
    producto.appendChild(titulo);

    const precioElemento = document.createElement("p");
    precioElemento.textContent = `Precio: $${precio}`;
    producto.appendChild(precioElemento);

    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;
    producto.appendChild(descripcionElemento);

    return producto;
}

export { crearProducto };
