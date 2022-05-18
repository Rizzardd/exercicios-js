const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')
let option = 'S'
let arrayPar = []
let arrayImpar = []
let cont = 0
let limitePar = 0
let limiteImpar = 0
while (option === 'S') {
  let listPerson = {
    nome: read('Insira um Nome:'),
    idade: readInt('Insira a idade:'),
    numero: readInt('Insira o Telefone:')
  }
  if (listPerson.idade % 2 === 0) {
    arrayPar.push(listPerson)
    limitePar++
  } else {
    arrayImpar.push(listPerson)
    limiteImpar++
  }
  cont++
  option = read('Deseja inserir outra pessoa?')
}
cont = 0
writeline('pessoas com idade par: ')
while (cont < limitePar) {
  writeline(arrayPar[cont].nome)
  writeline(arrayPar[cont].idade)
  writeline(arrayPar[cont].numero)
  cont++
}
cont = 0
writeline('pessoas com idade Impar: ')
while (cont < limiteImpar) {
  writeline(arrayImpar[cont].nome)
  writeline(arrayImpar[cont].idade)
  writeline(arrayImpar[cont].numero)
  cont++
}
