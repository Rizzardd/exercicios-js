const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

const int1 = readInt('escreva um numero:')

const int2 = readInt('escreva outro numero:')

if (int1 < int2) {
  writeline('os numeros sao: ' + int2 + int1)
} else {
  write('os numeros sao: ' + int1 + ',' + int2)
}
