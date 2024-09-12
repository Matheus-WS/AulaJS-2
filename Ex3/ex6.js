var prompt = require('prompt-sync')()

let n1 = Number(prompt("Digite o valor da compra: "))
let n2 = Number(prompt("Digite o valor a ser pago pelo cliente: "))

let troco = n2 - n1

console.log(`O valor da compra é ${n1}`)
console.log(`O valor a ser pago é ${n2}`)
console.log(`O troco é ${troco}`)