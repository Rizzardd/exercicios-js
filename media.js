const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let num = []
let cont = 0
let soma = 0
let limite = readInt('quantos numeros deseja informar?')
cont = 0
while (cont < limite) {
  num[cont] = readInt('escreva o ' + (cont + 1) + ' numero')
  soma += num[cont]
  cont++
}
writeline('a media e: ' + soma / limite)
