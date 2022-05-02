const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')
let cont = 1
let num = readInt('escreva um numero maior que um:')
while (cont <= num) {
  if (cont % 3 === 0) {
    writeline(cont + '!')
  } else {
    writeline(cont)
  }
  cont += 1
}
