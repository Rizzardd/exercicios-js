const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

const n1 = readInt('Informe o primeiro numero')
const n2 = readInt('Informe o segundo numero')
if (n1 < n2) {
  writeline(n1 + ',' + n2)
} else {
  writeline(n2 + ',' + n1)
}
