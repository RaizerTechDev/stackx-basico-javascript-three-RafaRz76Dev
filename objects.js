// Calcula o perímetro e a área de um retângulo usando um objeto
function calcularRetangulo(retangulo) {
  const area = retangulo.largura * retangulo.altura;
  const perimetro = 2 * (retangulo.largura + retangulo.altura);
  return { perimetro: perimetro, area: area };
}
var retangulo = {
  largura: 5,
  altura: 8,
};
var resultado = calcularRetangulo(retangulo);

console.log(
  "- Calculo do perímetro e da área de um retângulo=>",
  "area: ",
  resultado.area,
  "perimetro: ",
  resultado.perimetro
);
// console.log("Cálculo Perímetro => ", );

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
  if (pessoa.idade >= 18) {
    return true;
  } else {
    return false;
  }
}
var pessoa = {
  idade: 25,
};
console.log("- É maior de idade => ", ehAdulto(pessoa));

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
  return `${obj.nome} ${obj.idade} ${obj.cidade}`;
}
var objeto = {
  nome: "Bob",
  idade: "35",
  cidade: "London!",
};
console.log("String Concatenada => ", concatenaValores(objeto));

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
