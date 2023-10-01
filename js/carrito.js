// Función para generar una tabla con los productos asi es mas facil de ver al usuario
function tablaDeProductos(producto) {
    let tabla = "\n";
    for (let i = 0; i < productos.length; i++) {
        tabla += (i + 1) + ". " + producto[i].nombre + ". $" + producto[i].precio + "\n";
    }
    return tabla;
}

// Peticion al usuario del producto que desea comprar mediante una lista. Solo se debe ingresar el numero del producto. 
let productoComprar = parseInt(prompt("¿Qué producto desea comprar?\nIngrese 'listo' cuando termine" + tablaDeProductos(productos)));
let productosCarrito = [];

// Iteracion para poder ingresar más de un producto
while ((productoComprar !== "") && (!isNaN(productoComprar))) {
    if (productoComprar >= 1 && productoComprar <= productos.length) {
        productosCarrito.push(productos[productoComprar - 1]);
        console.log("El producto ingresado es: " + productos[productoComprar - 1].nombre);
        productoComprar = parseInt(prompt("¿Qué producto desea comprar?" + tablaDeProductos(productos)));
    }

}

// Funcion para calular el precio total del carrito
let totalCarrito = productosCarrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

// Se le pregunta al usuario si quiere envio
let envio = prompt("¿Envio a domicilio? Su costo es de $200")
let direccion
let celular
const PRECIO_ENVIO = 200

// Acciones si quiere envio y en caso que no
if (envio.trim().toUpperCase() === "SI") {
    direccion = prompt("Ingrese la direccion a la cual se enviara el pedido")
    celular = prompt("Ingrese un numero de celular para coordinar el envio")
    console.log("El pedido tiene un precio total de: " + totalCarrito + " + el envio\nLa direccion de envio es: " + direccion + "\nEl celular para coordinar es: " + celular)
    totalCarrito += PRECIO_ENVIO
    alert("Gracias por tu compra! El total a pagar es: " + totalCarrito + "\nSe contactaran contigo dentro de las proximas 24hs para coordinar el envio.")
} else {
    console.log("El pedido tiene un precio total de: " + totalCarrito + "\nRetira en tienda")
    alert("Gracias por tu compra! El total a pagar es: " + totalCarrito + ". Puedes pasar a retirar a partir de las proximas 24hs habiles en: Local 8, Montevideo Shopping de Lunes a Viernes en el horario de 8:00 a 20:00")
}