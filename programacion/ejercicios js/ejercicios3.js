const prompt = require("prompt-sync")({sigint: true})

// IF / IF ELSE

// let probandoIf =(numero) =>{
//     if (numero > 5){
//         console.log("el numero es mayor a 5")
//     }
//     else if (numero === 5){
//         console.log("el numero es 5")
//     }
//     else {
//         console.log("el numero es menor que 5")
//     }
// }
// numero = prompt("ingrese un numero")
// probandoIf(numero)

// TERNARIO

// let clima = "lluvioso"
// let salgoConParaguas = clima === "lluvioso" ? "llevalo" : "no hace falta"
// console.log(salgoConParaguas)

// SWITCH CASE

// let sonidosDeAnimales = (animal) => {

//     switch(animal){
//         case "gato":
//             return "miauuu"

//         case "perro":
//             console.log("guau q linda q sos") 
//             break 

//         case "gallina":
//             return "sos de la B"

//         default:
//             return "no conozco ese animal"
//     }
// }

// console.log(sonidosDeAnimales("gallina"))


// EJERCICIO

// let puedeSubir = ( altura, vieneAcompañada )=>{

//     if(altura >= 1.4 && altura < 2){
//         // BLOQUE
//         return "si puede subir..."
//     }else if(altura < 1.40 && altura >= 1.20 && vieneAcompañada === true){
//         //BLOQUE
//         return "si puede subir"
//     }else{
//         return "perdon, no puede subir"
//     }

// }
// console.log(puedeSubir(1.40, false))


// EJERCICIO

let patova = (edad) => {
if (edad > 0){
    if (edad > 18){
        if (edad >= 21){
            if (edad == 21){
                console.log("Bienvenido, ya tiene la mayoria de edad")
            }
            console.log("Puede pasar")
        }else{
            console.log("puede pasar pero no tomar alcohol")
        }
    }else {
        console.log("no puede pasar")
    }
    if (edad % 2 != 0 ){
        console.log("Sabias que tu edad es impar?")
    }
}else{
    console.log("error")
}
}
patova(17)
