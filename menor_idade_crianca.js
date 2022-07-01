const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let opcao = 's'
let listaDePessoas = []
while (opcao == 's') {
  let pessoa = {
    nome: read('informe o nome: '),
    idade: readInt('informe a idade: ')
  }
  opcao = read('deseja informar mais uma pessoa?')
  listaDePessoas.push(pessoa)
}

function idades(Idade) {
  let arrayIdade = Idade
  let idades = []
  for (let cont = 0; cont < arrayIdade.length; cont++) {
    if (arrayIdade[cont].idade > 18) {
      idades.push(arrayIdade[cont].nome.toLowerCase())
    } else {
      idades.push(arrayIdade[cont].nome.toUpperCase())
    }
  }
  return idades
}

for (let cont = 0; cont < listaDePessoas.length; cont++) {
  console.log(idades(listaDePessoas)[cont])
}
