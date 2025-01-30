const prompt = require("prompt-sync")({sigint: true})


// FUNCIONES DECLARADAS

function saludar(){
    let nombre = "matias"
    return nombre
}
console.log(saludar())

saludar()


// FUNCIONES EXPRESADAS

let restar = function(){

}

let sumar = ()=>{
    // LA QUE MAS SE USA
}

// PARAMETROS
let saludo = (nombre, apellido)=>{
    // console.log("hola " + nombre + " como estas?") //NO SE USA
    console.log(`hola ${nombre} ${apellido} como estas?`) // SI SE USA
}

saludo("Matias", "Rivas")
