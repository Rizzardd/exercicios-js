const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let opcao = 'S'
let arrayPar = []
let arrayImpar = []

while (opcao === 'S') {
  let listPerson = {
    nome: read('insira o nome: '),
    idade: read('insira a idade: '),
    numero: read('insira o telefone: ')
  }
  if (listPerson.idade % 2 === 0) {
    arrayPar.push(listPerson)
  } else {
    arrayImpar.push(listPerson)
  }
  opcao = read('gostaria de inserir outro contato?')
}
writeline('pessoas com idade Par: ')
for (let cont = 0; cont < arrayPar.length; cont++) {
  writeline(arrayPar[cont].nome)
  writeline(arrayPar[cont].idade)
  writeline(arrayPar[cont].numero)
}
writeline('pessoas com idade impar: ')
for (let cont = 0; cont < arrayImpar.length; cont++) {
  writeline(arrayImpar[cont].nome)
  writeline(arrayImpar[cont].idade)
  writeline(arrayImpar[cont].numero)
}
