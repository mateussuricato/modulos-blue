const prompt = require('prompt-sync')();

const num = 10

console.log(`A tabuada do 10 é`)

for (let i = 0; i <= 10; i++){
    const res = i * num
    console.log(`${i} x ${num} = ${res}`)
}