const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

const texto = read('escreva um texto') // o read retorna o valor (retornar é quando o valor vai para trás)

const int = readInt('escreva um número inteiro')

const float = readFloat('escreva um número real')

const bool = readBool('escreva um valor lógico (verdadeiro ou falso)')

writeline('escrevendo com quebra de linha')

write('escrevendo algo ' + texto)
