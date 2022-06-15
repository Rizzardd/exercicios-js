const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

console.log('soma')
function somar(num1, num2) {
  let resultado = num1 + num2
  return resultado
}
let entrada = readInt('informe o valor 1: ')
let entrada2 = readInt('informe o valor 2: ')
let result = somar(entrada, entrada2)
console.log('resultado da soma: ')
console.log(result)

function multiplicar(num1, num2) {
  let resultado = num1 * num2
  return resultado
}

console.log('multiplicacao')
let entrada3 = readInt('informe o valor 1: ')
let entrada4 = readInt('informe o valor 2: ')
console.log('resultado da multiplicacao: ')
let result2 = multiplicar(entrada3, entrada4)
console.log(result2)

console.log('subtracao')
function subtrair(num1, num2) {
  let resultado = num1 - num2
  return resultado
}
let entrada5 = readInt('informe o valor 1: ')
let entrada6 = readInt('informe o valor 2: ')
console.log('resultado da subtracao: ')
let result3 = subtrair(entrada5, entrada6)
console.log(result3)

console.log('divisao')
function dividir(num1, num2) {
  let resultado = num1 / num2
  return resultado
}
let entrada7 = readInt('informe o valor 1: ')
let entrada8 = readInt('informe o valor 2: ')
console.log('resultado divisao: ')
let result4 = dividir(entrada7, entrada8)
console.log(result4)
