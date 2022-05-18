const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')
let option = 'S'
let array = []
let maiorIdade = 0
let indexM
let idade
let cont = 0
while (option === 'S') {
  let listPerson = {
    nome: read('Insira um Nome:'),
    idade: readInt('Insira a idade:'),
    numero: readInt('Insira o Telefone:')
  }
  array.push(listPerson)
  idade = listPerson.idade
  if (idade > maiorIdade) {
    maiorIdade = idade
    indexM = cont
  }
  cont++
  option = read('Deseja inserir outra pessoa?')
}
writeline('Pessoa Mais velha:')
writeline(array[indexM].nome)
writeline(array[indexM].idade)
writeline(array[indexM].numero)
