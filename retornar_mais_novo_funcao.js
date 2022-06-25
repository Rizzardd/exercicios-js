const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let opcao = 's'
let array = []
while (opcao == 's') {
  let listaDePessoas = {
    nome: read('informe o nome:'),
    idade: read('informe a idade:'),
    sexo: read('informe o sexo:')
  }
  array.push(listaDePessoas)
  opcao = read('deseja inserir mais uma pessoa?')
}

function nomeMaisNovo(pessoa) {
  let arrayObjeto = pessoa
  let menorIdade = Infinity
  let menorIndex
  for (let cont = 0; cont < arrayObjeto.length; cont++) {
    if (arrayObjeto[cont].idade < menorIdade) {
      menorIdade = arrayObjeto[cont].idade
      menorIndex = cont
    }
  }
  return arrayObjeto[menorIndex].nome
}
console.log(nomeMaisNovo(array))
