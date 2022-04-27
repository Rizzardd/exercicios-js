const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

const sexo = read(
  'Informe seu sexo, informando F para feminino e M para masculino: '
)

const idade = readInt('Informe sua idade: ')

if (idade < 18) {
  writeline('Bem Vinda, Criança!')
} else {
  if (sexo == 'F') {
    writeline('Bem Vinda, Senhora!')
  } else if (sexo == 'M') {
    writeline('Bem Vindo, Senhor!')
  } else {
    writeline('Bem Vindo!!!')
  }
}
