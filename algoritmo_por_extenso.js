const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')
const n1 = readInt('escreva um numero de um a 9: ')
if (n1 === 0) {
  writeline('zero')
} else if (n1 === 1) writeline('um')
else if (n1 === 2) writeline('dois')
else if (n1 === 3) writeline('tres')
else if (n1 === 4) writeline('quatro')
else if (n1 === 5) writeline('cinco')
else if (n1 === 6) writeline('seis')
else if (n1 === 7) writeline('sete')
else if (n1 === 8) writline('oito')
else if (n1 === 9) writeline('nove')
