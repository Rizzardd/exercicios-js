const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let str = read('informe uma palavra:')

function reverso(str) {
  let revert = ''
  for (let cont = str.length - 1; cont >= 0; cont--) {
    revert += str[cont]
  }
  return revert
}
let result = reverso(str)
console.log(result)
