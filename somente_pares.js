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
let limite = readInt('quantos numeros deseja informar?')
while (cont < limite) {
  cont += 1
  num[cont] = readInt('informe o ' + cont + ' numero')
}
cont = 0
cont = 1
while (cont < limite) {
  if (num[cont] % 2 === 0) {
    writeline('os pares sao: ' + num[cont])
  }
  cont++
}
