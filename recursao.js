//calcula a soma dos números inteiros de 1 a n
function somaNumeros(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + somaNumeros(n - 1);
  }
}
var n = 5;
var resultado = somaNumeros(n);
console.log("- Soma nºs inteiros de 1 a n(5)=> ", resultado);

var n = 10;
var resultado = somaNumeros(n);
console.log("- Soma nºs inteiros de 1 a n(10)=> ", resultado);

// Retorna o número se ele é par ou não
function ehPar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log("- (4) é Par => ",ehPar(4));
console.log("- (7) é Impar => ", ehPar(7));

// Calcula a sequência de Fibonacci para um dado número
function fibonacci(x) {
  if(x <3) return 1;
  return fibonacci(x -1) + fibonacci (x -2)
  
}
var x = [6];
var resultado = fibonacci(x);
 console.log("- Seq. de Finobacci[6] => ", resultado)

 var x = [9];
 var resultado = fibonacci(x);
 console.log("- Seq. de Finobacci[9] => ", resultado)

module.exports = { somaNumeros, ehPar, fibonacci };