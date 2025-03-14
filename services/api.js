async function productosApi() {
    try {
        console.log("hola mundo");
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        return []; 
    }
}

export { productosApi };
