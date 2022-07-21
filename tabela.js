const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let tabela = [
  1.0, // real
  5.44, // dolar
  5.55, // euro
  6.51 // libra esterlina
]
let opcao = 's'
let moedaLocal = ''

while (opcao == 's') {
  moedaLocal = read('informe a sigla da moeda local: ')
  let moedaDeconversao = read('informe a sigla da moeda de conversao: ')
  switch (moedaLocal) {
    case 'BRL':
      moedaLocal = tabela[0]
      break
    case 'USD':
      moedaLocal = tabela[1]
      break
    case 'EUR':
      moedaLocal = tabela[2]
      break
    case 'GBP':
      moedaLocal = tabela[3]
      break
  }
  switch (moedaDeconversao) {
    case 'BRL':
      moedaDeconversao = tabela[0]
      break
    case 'USD':
      moedaDeconversao = tabela[1]
      break
    case 'EUR':
      moedaDeconversao = tabela[2]
      break
    case 'GBP':
      moedaDeconversao = tabela[3]
      break
  }
  console.log(Math.round((moedaLocal / moedaDeconversao) * 100) / 100)

  opcao = read('deseja realizar outra conversao?')
}
