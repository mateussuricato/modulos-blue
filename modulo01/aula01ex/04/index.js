const prompt = require('prompt-sync')();

const dias = +prompt('Quantos dias você viveu? ')

const anos = Math.trunc(dias / 365)
const restoEmDias1 = dias % 365
const mes = Math.trunc(restoEmDias1 / 30)
const restoEmDias2 = restoEmDias1 % 30


console.log(`Você possui ${anos} anos e ${mes} meses e ${restoEmDias2} dias`)
