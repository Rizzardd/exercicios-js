const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let opcao = 'S'
while ((opcao = 'S')) {
  let num1 = readInt('informe o primeiro numero:')
  let num2 = readInt('informe o segundo numero:')
  writeline('a multiplicação entre os dois numeros é: ' + num1 * num2)
  opcao = read('deseja fazer outro calculo?')
}
writeline('fim do calculo')
