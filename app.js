import {saludoPersonalizado, notas, contarHasta, subtotal, calcularIva, totalaPagar, esPrimo} from "./modulos/index.js";
console.log(saludoPersonalizado("Karol"));

// let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
// let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
// let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
// console.log (notas(nota1, nota2, nota3));

// let numero = parseInt(prompt("Ingrese un número hasta el cual contar:"));
// contarHasta(numero);

// let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
// let precio = parseFloat(prompt("Ingrese el precio del producto:"));
// console.log ("el total a pagar es: " + totalaPagar(cantidad, precio, 19));

let ingrese = parseInt(prompt("Ingrese un número para saber si es primo:"));
console.log(esPrimo(ingrese));
