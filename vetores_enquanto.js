const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

const nome = []
const limite = readInt('Informe a quantidade de convidados')
for (let cont = 0; cont < limite; cont++) {
  nome[cont] = read('Informe o nome do convidado')
}
writeline('Os convidados foram')
for (let cont = 0; cont < limite; cont++) {
  writeline('-' + nome[cont])
}
