const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let sexo = read('informe seu sexo:')
while (sexo != 'F' && sexo != 'M') {
  writeline('sexo inválido.')
  let sexo = read('informe seu sexo:')
}
if (sexo === 'F') {
  writeline('bom dia, senhora!')
} else {
  writeline('bom dia, senhor!')
}
