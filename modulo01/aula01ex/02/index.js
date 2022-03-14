const prompt = require('prompt-sync')();

const nome1 = 'parafusos'
const nome2 = 'pregos'

const peca1 = +prompt(`Quantos ${nome1} você vai querer levar? `)
const peca2 = +prompt(`Quantos ${nome2} você vai querer levar? `)

const valor1 = 0.11
const valor2 = 0.05

console.log(`Você comprou ${peca1} ${nome1}, deu R$${(peca1 * valor1).toFixed(2)}`)
console.log(`Você comprou ${peca2} ${nome2}, deu R$${(peca2 * valor2).toFixed(2)}`)

const total = peca1 * valor1 + peca2 * valor2

console.log(`O valor total é de R$${(total).toFixed(2)}`)