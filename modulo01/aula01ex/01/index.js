const prompt = require('prompt-sync')();

const nota1 = +prompt('Digite a primeira nota: ')
const nota2 = +prompt('Digite a segunda nota: ')
const media = (nota1 * 4 + nota2 * 6) / 10

console.log(`A média poderada das notas do aluno X é ${media}`)