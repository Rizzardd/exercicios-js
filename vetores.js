const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let nome = []
let ni = 0
let nf = readInt('informe a quantidade de convidados:')
while (ni < nf) {
  nome[ni] = read('informe o nome fo convidado')
  ni++
}
ni = 0
while (ni < nf) {
  writeline('os convidados foram: ' + nome[ni])
  ni++
}
