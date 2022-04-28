const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

const n1 = readInt('informe o primeiro numero:')

const n2 = readInt('informe o segundo numero:')

const n3 = readInt('informe o terceiro numero:')

if (n3 < n2 && n2 < n1) {
  writeline('os numeros sao: ' + n3 + ' ' + n2 + ' ' + n1)
} else if (n2 < n1 && n1 < n3) {
  writeline('os numeros sao: ' + n2 + ' ' + n1 + ' ' + n3)
} else if (n3 < n1 && n1 < n2) {
  writeline('os numeros sao: ' + n3 + ' ' + n1 + ' ' + n2)
} else if (n2 < n3 && n3 < n1) {
  writeline('os numeros sao: ' + n2 + ' ' + n3 + ' ' + n1)
} else if (n1 < n3 && n3 < n2) {
  writeline('os numeros sao: ' + n1 + ' ' + n3 + ' ' + n2)
} else if (n1 < n2 && n2 < n3) {
  writeline('os numeros sao: ' + n1 + ' ' + n2 + ' ' + n3)
}
