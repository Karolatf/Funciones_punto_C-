function notas (nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 3) {
        return `Aprobo con un promedio de: ${promedio}`;
    } else {
        return `Reprobo con un promedio de: ${promedio}`;
    }
}
export { notas };
// Esta función recibe tres notas como parámetros y devuelve el promedio de las mismas.
// Luego se exporta para poder usarla en otros archivos.