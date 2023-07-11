// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
  return (squaredNumbers = numeros.map((numeros) => numeros * 2));
}
var numeros = [1, 2, 3];
var dobrarNumeros = dobrarNumeros(numeros);
console.log("- Resultado numeros Dobrados =>", dobrarNumeros);

function dobrarNumeros1(numeros) {
  return (squaredNumbers = numeros.map((numeros) => numeros * 2));
}
var numeros = [-1, 0, 5];
var dobrarNumeros = dobrarNumeros1(numeros);
console.log("- Resultado numeros Dobrados =>", dobrarNumeros);

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
  return numeros.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// Exemplo de uso
var numeros = [1, 2, 3];
var resultado = somarValores(numeros);
console.log("- Resultado Soma dos Valores => ", resultado);

var numeros1 = [-1, 0, 5];
var resultado = somarValores(numeros1);
console.log("- Resultado Soma dos Valores => ", resultado);

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
  var numerosPares = [];

  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }

  return numerosPares;
}

// Exemplo de uso
var numeros = [1, 2, 3, 4, 5, 6];
var numerosPares = filtrarPares(numeros);
console.log("- Resultado Nº Pares => ", numerosPares);

var numeros1 = [0, 1, 2, 3, 4, 5];
var numerosPares = filtrarPares(numeros1);
console.log("- Resultado Nº Pares => ", numerosPares);

module.exports = {
  dobrarNumeros,
  somarValores,
  filtrarPares,
};
