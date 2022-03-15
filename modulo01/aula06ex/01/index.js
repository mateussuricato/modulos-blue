const prompt = require('prompt-sync')();

const num = []
const par = []
const impar = []

while (num.length < 20) {
    const add = +prompt('Digite um número: ')
    num.push(add)
    if (add % 2 == 0) {
        par.push(add)
    } 
    else {
        impar.push(add)
    }
}

console.log(num)
console.log(par)
console.log(impar)