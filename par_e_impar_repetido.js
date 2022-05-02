const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let contp = 0
let conti = 0
let opcao = 'S'

while (opcao === 'S') {
  let num = readInt('informe um numero:')
  if (num % 2 === 0) {
    contp += 1
    writeline(num + ' é par.')
  } else {
    writeline(num + ' é impar.')
    conti += 1
  }
  opcao = read('deseja inserir outro numero?')
}
writeline('você informou ' + contp + ' pares ' + conti + ' impares')
writeline('fim do calculo.')
