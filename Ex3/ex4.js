var prompt = require('prompt-sync')()
let n1 = Number(prompt("Digite a temperatura em celsius:"))

let fahrenheit = (n1 * 9 / 5) + 32

console.log (`O valor de ${n1} celsius em Fahrenheit seria: ${fahrenheit}`)