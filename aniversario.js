const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

const nome = []
const idade = []
let opcao = 'S'
let cont = 1
while (opcao === 'S') {
  nome[cont] = read('Informe o nome da ' + cont + '° pessoa: ')
  idade[cont] = readInt('Informe a idade')
  opcao = read('Deseja informar outra pessoa?')
  cont++
}
const limite = cont
writeline('Lista de pessoas')
cont = 1
while (cont < limite) {
  writeline('-' + nome[cont] + ' nasceu em ' + (2022 - idade[cont]))
  cont++
}
