const prompt = require('prompt-sync')();

const num = []
const par = []
const impar = []
let add = 0

while (num.length < 20) {
    add = +prompt('Digite um número: ')

    if (num.includes(add)){
        console.log('lista já possui esse número')
        continue
    }

    num.push(add)

    if (add % 2 == 0) {
        par.push(add)
    } else {
        impar.push(add)
    }
}

console.log(num)
console.log(par)
console.log(impar)