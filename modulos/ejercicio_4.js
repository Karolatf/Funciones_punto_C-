function subtotal (cantidad, precio) {
    return cantidad * precio;
}
export { subtotal };
// Esta función recibe dos parámetros: cantidad y precio.
// Devuelve el subtotal multiplicando ambos valores.
// Luego se exporta para poder usarla en otros archivos.

function calcularIva(subtotal){
    return (subtotal * 0.19)
}
   
export { calcularIva };
// Esta función recibe tres parámetros: cantidad, precio e iva.
// Si el valor de iva es 19, calcula el IVA correspondiente al subtotal (cantidad * precio) y lo devuelve.
// Luego se exporta para poder usarla en otros archivos.

function totalaPagar(cantidad, precio, iva) {
    return totalaPagar = subtotal(cantidad, precio) + calcularIva(cantidad, precio, iva);
}
export { totalaPagar };
// Esta función recibe tres parámetros: cantidad, precio e iva.
// Devuelve el total a pagar sumando el subtotal y el IVA calculado.
// Luego se exporta para poder usarla en otros archivos.