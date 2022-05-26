const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let str = []
let opcao = 's'
let iniciais = []
let array = []

while (opcao === 's') {
  let listPerson = {
    nome: read('informe o nome: '),
    idade: read('informe a idade: '),
    numero: read('informe o telefone: ')
  }
  opcao = read('deseja inserir mais uma pessoa?')
  array.push(listPerson)
}

let busca = read('informe uma letra para buscar: ')
writeline('pessoas: ')
for (let cont = 0; cont < array.length; cont++) {
  if (array[cont].nome.includes(busca, 0)) {
    writeline('- ' + array[cont].nome)
  }
}
