const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let nome = []
let numero = []
let opcao = 's'
let cont = 0
let limite = 0
while (opcao === 's') {
  nome[cont] = read('informe o nome do contato:')
  numero[cont] = readInt('informe o numero do contato:')
  opcao = read('deseja adicionar mais um contato?')
  cont += 1
}
limite = cont
cont = 0
writeline('os contatos são:')
while (cont < limite) {
  writeline('- ' + nome[cont] + ', ' + numero[cont])
  cont += 1
}
