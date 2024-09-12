var prompt = require('prompt-sync')()

let n1 = Number(prompt("Digite o valor para A:"))
let n2 = Number(prompt("Digite o valor para B: "))
let troca = n1
n1 = n2
n2 = troca
console.log(`A varialvel A contém o valor: ${n1}`)
console.log(`A variavel B contém o valor: ${n2}`)
