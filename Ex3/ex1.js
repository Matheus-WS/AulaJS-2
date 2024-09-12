var prompt = require('prompt-sync')()
const pi = 3.14

let raio = Number(prompt("Digite o raio de um círculo: "))

let area = pi * (raio ** 2 )

console.log(`A área do círculo é ${area}`)