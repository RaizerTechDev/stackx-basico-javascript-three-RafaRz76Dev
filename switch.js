//Verifica o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    switch (number) {
      case 1:
        return "Domingo";
        break;
      case 2:
        return "Segunda-feira";
        break;
      case 3:
        return "Terça-feira";
        break;
      case 4:
        return "Quarta-feira";
        break;
      case 5:
        return "Quinta-feira";
        break;
      case 6:
        return "Sexta-feira";
        break;
      case 7:
        return "Sábado";
        break;
  
      default:
        return "Dia inválido";
    }
  }
  
  console.log(
    "- Dia da semana correspondente ao número[1] =>",
    retornaDiaSemana(1)
  );
  console.log(
    "- Dia da semana correspondente ao número[4] =>",
    retornaDiaSemana(4)
  );
  console.log(
    "- Dia da semana correspondente ao número[9] =>",
    retornaDiaSemana(9)
  );
  
  // Verifica o preço do produto com base no código de produto
  function retornaPrecoProduto(code) {
    switch (code) {
      case "A":
        return 10.99;
        break;
  
      case "B":
        return 5.99;
        break;
      case "C":
        return 7.5;
        break;
      default:
        return "Código inválido";
    }
  }
  console.log("- Preço do produto com código[A] =>", retornaPrecoProduto("A"));
  console.log("- Preço do produto com código[B] =>", retornaPrecoProduto("B"));
  console.log("- Preço do produto com código[D] =>", retornaPrecoProduto("D"));
  
  //Verifica a categoria de um produto com base no tipo de produto
  function retornaCategoriaProduto(type) {
    switch (type) {
      case "Eletrônicos":
        return "Tecnologia";
        break;
  
      case "Roupas":
        return "Moda";
        break;
      case "Alimentos":
        return "Alimentação";
      default:
        return "Categoria desconhecida";
    }
  }
  console.log(
    "- Categoria do tipo de produto[Eletrônicos]=>",
    retornaCategoriaProduto("Eletrônicos")
  );
  
  module.exports = {
    retornaDiaSemana,
    retornaPrecoProduto,
    retornaCategoriaProduto,
  };
  
   