const prompt = require('prompt-sync')();

const ano = +prompt('Quantos anos você tem? ')
const meses = +prompt('Quantos meses de vida? ')
const dias = +prompt('Quantos dias? ')

const res = (ano * 365) + (meses * 30) + dias

console.log(`Você tem quantos ${res} dias de existência `)