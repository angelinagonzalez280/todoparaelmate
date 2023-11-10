const productosCarrito = [];

const botonAgregar = document.querySelectorAll(".boton-añadir");

fetch('../productos.json')
    .then(response => response.json())
    .then(productos => {
        agregarCarrito(productos);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

function agregarCarrito(productos) {
    botonAgregar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const idProducto = parseInt(boton.getAttribute("id"));
            const productoSeleccionado = productos.find((producto) => producto.id === idProducto);
            productosCarrito.push(productoSeleccionado);
            localStorage.setItem('carrito', JSON.stringify(productosCarrito));
        });
    });
}

