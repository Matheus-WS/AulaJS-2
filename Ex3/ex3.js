var prompt = require('prompt-sync')()

let vh = Number(prompt("Insira o valor da hora trabalhada: "))
let ht = Number(prompt("Insira o valor das horas trabalhadas: "))
const pd = 10  

sb = ht * vh
td = (pd/100) * sb
sl = sb - td

console.log(`Horas trabalhadas ${ht}`)
console.log(`Salario Bruto ${sb}`)
console.log(`${td.toFixed(2)}`)
console.log(`Salario Liquido ${sl}`)
