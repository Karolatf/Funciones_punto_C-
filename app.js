import {saludoPersonalizado, notas} from "./modulos/index.js";
console.log(saludoPersonalizado("Karol"));

let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

console.log(`El promedio de las notas es: ${notas(nota1, nota2, nota3)}`);