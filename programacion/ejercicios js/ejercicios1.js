const prompt = require("prompt-sync")({sigint: true})

/*
let pulgadas = prompt("Ingrese cantidad de pulgadas")

let pulgadasACentimetros = pulgadas =>  pulgadas * 2.54 

let resultado = pulgadasACentimetros(pulgadas)

console.log(resultado)
*/

/*-------------------------------------------------------------------------------------*/

let nombre = prompt("Ingrese nombre de su pagina")

let web = nombre => {
    let url = `https://www.${nombre}.com`
    return url
}   

let link = web(nombre)
console.log(link)