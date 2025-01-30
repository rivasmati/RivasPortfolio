// let suma = (x,y) =>  x + y


// let numero = 5

// let multiplicacion = () => {
//     numero = numero * 2
//     return numero
// }

// console.log(multiplicacion())
// console.log(multiplicacion())
// console.log(multiplicacion())


let anterior = numero => numero - 1
let triple = numero => numero * 3
let anteriordeltriple = numero => anterior(triple(numero))

let resultado2 = anteriordeltriple(5)

console.log(resultado2)