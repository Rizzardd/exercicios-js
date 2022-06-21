const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

const numeros = [1, 2, 3, 4, 5]

function duplicar(arr) {
  let resultado = []
  for (let cont = 0; cont < arr.length; cont++) {
    resultado.push(arr[cont] * 2)
  }
  return resultado
}
console.log(duplicar(numeros))
