export function esPrimo(numero) {
  let esPrimo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
  return esPrimo;
}


// Esta función determina si un número es primo verificando 
// si tiene divisores distintos de 1 y de sí mismo.