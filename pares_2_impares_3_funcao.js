const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let num = []
let limite = readInt('informe quantos numeros deseja informar:')
function separar(int) {
  let numf = int
  let array = []
  for (let cont = 0; cont < limite; cont++) {
    if (numf[cont] % 2 === 0) {
      array.push(numf[cont] * 2)
    } else {
      array.push(numf[cont] * 3)
    }
  }
  return array
}
for (let cont = 0; cont < limite; cont++) {
  num[cont] = readInt('informe o ' + (cont + 1) + ' numero')
}
writeline(separar(num))
