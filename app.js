import {saludoPersonalizado, notas, contarHasta} from "./modulos/index.js";
console.log(saludoPersonalizado("Karol"));

// let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
// let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
// let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
// console.log (notas(nota1, nota2, nota3));

let numero = parseInt(prompt("Ingrese un número hasta el cual contar:"));
contarHasta(numero);

