const {
  read, //lê texto literal, string
  readInt, // lê números inteiros (números inteiros são números que não tem fração)
  readBool, // lê valores lógicos
  readFloat, // lê números fracionários ou reais (dentro dos números reais existem números inteiros, em ingles float)
  write, // escreve um valor sem quebra de linha
  writeline // escreve um valor com quebra de linha
} = require('learning-console')

let palavra = read('Digite uma palavra')
let quantidadeAtual = 0
let array = []

for (let a = 0; a < palavra.length; a++) {
  let letraAtual = palavra[a]
  for (let b = 0; b < palavra.length; b++) {
    let letraAnalisada = palavra[b]

    if (letraAtual === letraAnalisada) {
      quantidadeAtual++
    }

    let objetoAtual = {
      letra: letraAtual,
      deveSerImpresso: true,
      quantidade: quantidadeAtual
    }

    if (b == palavra.length - 1) {
      array.push(objetoAtual)
    }
  }
  quantidadeAtual = 0
}

for (let i = 0; i < array.length; i++) {
  for (let o = i; o < array.length; o++) {
    if (i != o && array[i].letra == array[o].letra) {
      array[o].deveSerImpresso = false
    }
  }
}
writeline('A quantidade de cada letra na palavra escrita foi:')
for (let p = 0; p < array.length; p++) {
  if (array[p].deveSerImpresso === true) {
    if (array[p].quantidade === 1) {
      writeline(
        'Letra ' + array[p].letra + ' aparece ' + array[p].quantidade + ' vez'
      )
    } else {
      writeline(
        'Letra ' + array[p].letra + ' aparece ' + array[p].quantidade + ' vezes'
      )
    }
  }
}
