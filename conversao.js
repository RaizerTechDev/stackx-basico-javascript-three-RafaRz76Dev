// Converte uma string para um número inteiro
function convertToInt(string) {
  return Number(string);
}
console.log(convertToInt("42"));
console.log(typeof convertToInt("42"));

// Converte uma string para um número inteiro
function convertToInt(string) {
  return Number(string);
}
console.log(convertToInt("-10"));
console.log(typeof convertToInt("-10"));

// Converte um número inteiro para uma string
function convertToString(number) {
  return String(number);
}
console.log(convertToString(123));
console.log(typeof convertToString(123));

// Converte um número inteiro para uma string
function convertToString(number) {
  return String(number);
}
console.log(convertToString(-5));
console.log(typeof convertToString(-5));

// Converte um valor para um booleano
function convertToBoolean(value) {
  return Boolean(value);
}
console.log(convertToBoolean(""));
console.log(typeof convertToBoolean("false"));

// Converte um valor para um booleano
function convertToBoolean(value) {
  return Boolean(value);
}
console.log(convertToBoolean("true"));
console.log(typeof convertToBoolean("true"));

module.exports = { convertToInt, convertToString, convertToBoolean };
