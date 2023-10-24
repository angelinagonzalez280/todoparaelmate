const productosCarrito = [];

const botonAgregar = document.querySelectorAll(".boton-añadir");

botonAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const idProducto = parseInt(boton.getAttribute("id"));
        const productoSeleccionado = productos.find((producto) => producto.id === idProducto);
        productosCarrito.push(productoSeleccionado);
        localStorage.setItem('carrito', JSON.stringify(productosCarrito));
    });
});
