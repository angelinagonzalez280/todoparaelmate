const productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
    const carrito = document.querySelector("#carrito");
    productosCarrito.forEach((producto) => {
        const productoEnCarrito = document.createElement("div");
        productoEnCarrito.innerHTML = `
            <div class="producto">
                <div class="producto-imagen-nombre">
                    <img class="producto-imagen" src="${producto.imagen}" alt="">
                        <div class="producto-nombre">
                            <p>${producto.nombre}</p>
                        </div>
                </div>
                <div class="producto-precio-eliminar">
                    <p>$${producto.precio}</p>
                    <button id="${producto.id}" class="boton-eliminar-carrito">Eliminar</button>
                </div>
            </div>`;
        carrito.appendChild(productoEnCarrito);
    });
}

function calcularTotalCarrito(carrito) {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio;
    });
    return total;
}

function mostrarTotal() {
    const totalCarrito = document.querySelector("#envio-total");
    const totalPrecio = calcularTotalCarrito(productosCarrito);
    totalCarrito.innerHTML = `
    <div class="precio-total">
        <p class="p-total">Total</p>
        <p class="p-numero">$${totalPrecio}</p>
    </div>
    <div class="pagar">
        <button class="boton-pagar">Pagar</button>
    </div>
    `;
}

mostrarTotal();

mostrarCarrito();

const botonEliminar = document.querySelectorAll(".boton-eliminar-carrito");

botonEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const idBoton = parseInt(boton.getAttribute("id"));
        const productoEliminado = productos.find((producto) => producto.id === idBoton);
        productosCarrito.splice(productoEliminado, 1);
        localStorage.setItem('carrito', JSON.stringify(productosCarrito));
        window.location.reload();
    })
})
