const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let numero1 = []
let limite = readInt('informe quantos numeros deseja informar:')
for (let cont = 0; cont < limite; cont++) {
  numero1[cont] = readInt('informe o ' + (cont + 1) + ' numero')
}
function somentepares(par) {
  let numero = par
  let pares = []
  for (let cont = 0; cont < limite; cont++) {
    if (numero[cont] % 2 === 0) {
      pares.push(numero[cont])
    }
  }
  return pares
}

writeline(somentepares(num))
