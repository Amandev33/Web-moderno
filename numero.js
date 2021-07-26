const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //mostrar apenas 2 casas após a ','
console.log(media.toString(2)) //tanto a função de ser um valor 'string' ou seja 'texto'. e o (2) é pra ser binario
console.log(typeof total)
console.log(typeof Number)//number com N maiusculo é uma função