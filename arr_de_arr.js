const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let menor = Infinity
let maior = -Infinity
let arrNotas = []
let matrizMedia = [
  [0, 0],
  [0, 0],
  [0, 0]
]
let matrizAlunos = [
  [0, 0],
  [0, 0],
  [0, 0]
]
let opcao = 's'
while (opcao == 's') {
  for (let i = 0; i < matrizAlunos.length; i++) {
    for (let j = 0; j < matrizAlunos.length - 1; j++) {
      matrizAlunos[i][j] = read(
        'informe o aluno na posicao ' + (i + 1) + ',' + (j + 1)
      )
      for (let f = 0; f < 4; f++) {
        arrNotas[f] = readFloat('informe a ' + (f + 1) + ' nota')
      }
      matrizMedia[i][j] =
        (arrNotas[0] + arrNotas[1] + arrNotas[2] + arrNotas[3]) / 4
      console.log(matrizMedia)
      if (matrizMedia[i][j] < menor) {
        menor = matrizMedia[i][j]
      }
      if (matrizMedia[i][j] > maior) {
        maior = matrizMedia[i][j]
      }
    }
  }
  for (i = 0; i < matrizMedia.length; i++) {
    for (j = 0; j < matrizMedia.length - 1; j++) {
      if (matrizMedia[i][j] < 4) {
        console.log(
          'o aluno na posicao ' + (i + 1) + ',' + (j + 1) + ' esta reprovado.'
        )
      }
      if (matrizMedia[i][j] >= 7) {
        console.log(
          'o aluno na posicao ' + [i + 1] + ',' + [j + 1] + ' esta aprovado!'
        )
      }
      if (matrizMedia[i][j] < 7) {
        console.log(
          'o aluno na posicao ' +
            [i + 1] +
            ',' +
            [j + 1] +
            ' esta de Prova Final.'
        )
      }
      if (matrizMedia[i][j] == maior) {
        console.log(
          'o aluno que esta na posicao ' +
            [i + 1] +
            ',' +
            [j + 1] +
            ' teve a maior media.'
        )
      }
      if (matrizMedia[i][j] == menor) {
        console.log(
          'o aluno que esta na posicao ' +
            [i + 1] +
            ',' +
            [j + 1] +
            ' teve a menor media.'
        )
      }
    }
  }
  opcao = read('deseja informar mais alunos?')
}
