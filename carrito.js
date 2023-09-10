const MATE = 500
const TERMO = 1000
const BOMBILLA = 300
const MATERA = 800
const PRECIO_ENVIO = 200

function precioProducto(producto) {
    switch (producto.trim().toLowerCase()) {
        case "mate":
            return MATE;
        case "termo":
            return TERMO;
        case "bombilla":
            return BOMBILLA;
        case "matera":
            return MATERA;
    }
}

//Peticion al usuario del producto que desea comprar (mate, termo, bombilla, matera)
let producto = prompt("¿Qué producto desea comprar?")
let total = 0
let conteo = 0

//Iteracion para poder ingresar más de un producto
while ((producto.trim().toUpperCase() !== "LISTO") && (producto !== "")) {
    total += precioProducto(producto);
    conteo++;
    console.log("El producto " + conteo + " ingresado es " + producto + " y va un total de: " + total);
    producto = prompt("¿Qué producto desea comprar?")
}

//Se le pregunta al usuario si quiere envio
let envio = prompt("¿Envio a domicilio? Su costo es de $200")
let direccion
let celular

//Acciones si quiere envio y en caso que no
if (envio.trim().toUpperCase() === "SI") {
    direccion = prompt("Ingrese la direccion a la cual se enviara el pedido")
    celular = prompt("Ingrese un numero de celular para coordinar el envio")
    console.log("El pedido tiene un precio total de: " + total + " + el envio\nLa direccion de envio es: " + direccion + "\nEl celular para coordinar es: " + celular)
    total += PRECIO_ENVIO
    alert("Gracias por tu compra! El total a pagar es: " + total + "\nSe contactaran contigo dentro de las proximas 24hs para coordinar el envio.")
} else {
    console.log("El pedido tiene un precio total de: " + total + "\nRetira en la tienda")
    alert("Gracias por tu compra! Puedes pasar a retirar a partir de las proximas 24hs habiles en: Local 8, Montevideo Shopping de Lunes a Viernes en el horario de 8:00 a 20:00")
}