// Ejercicio 1: 
// Desarrollar una función para cada uno de las siguientes apartados: 
// Que reciba por parámetro un número entero y retorne su doble.
// Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
// Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 

let double = numero => numero * 2
// console.log(double(8))

let multiplicacion = (x,y) => x * y
// console.log(multiplicacion(2,3));

let division = (x,y) =>{
    if(x !== 0 && y !== 0 && x % 1 === 0 && y % 1 === 0){
        return x / y
    }else{
        return "error" 
    }
}
// console.log(division(10,4.3))


/*---------------------------------------------------------------------------------------------------*/


// Ejercicio 2:
//  Deberás escribir un objeto literal llamado ciclista que contenga las siguientes propiedades que deberás completar con tus datos:
// nombre
// apellido 
// edad
// tiene Bici (TRUE/FALSE)

let ciclista = {
    nombre : "Pepito",
    apellido : "Garcia",
    edad : 8,
    tieneBici : true
}


// 2. Teniendo en cuenta los datos del punto número 1.
// Crear una función que reciba por parámetro el objeto y retorne un string en base a las siguientes condiciones : 
// si edad es mayor o igual a 18 y tiene bici  “puede competir”
//  si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
//  si no tiene bici “No podrá competir ” 
// *Deberás realizar la invocación de la función de forma que se pueda ver el resultado 

let competicion = arrCiclista =>{
    if(arrCiclista.tieneBici === true){
        if (arrCiclista.edad >= 18) {
            return "puede competir"
        }else{
            return "podrá competir pero con un adulto acompañante"
        }
    }else{
        return "No podrá competir"
    }
}

// console.log(competicion(ciclista));


/*------------------------------------------------------------------------------------------------------*/


// Ejercicio 3:
//  Crear un array VACÍO llamado competidores. 
// Dados estos tres objetos	
//    let competidor1 = {
//     nombre: 'Juan',
//     edad: 42,
//     kilometrosRecorridos: 80,
//    }
//     let competidor2 = {
//     nombre: 'Sofia',
//     edad: 22,
//     kilometrosRecorridos: 90
//    }
//     let competidor3 = {
//     nombre: 'Maria',
//     edad: 45,
//     kilometrosRecorridos: 70
//     }
// Agregarlos al array. (utilizando un método JS, pensa cual podrías utilizar)
// Mostrar por consola el array para ver que contenga esos objetos.
// Crea una función que reciba el array competidores como parámetro, e incremente en 100 la cantidad de kilómetros
// recorridos de cada uno de los competidores, llámala competencia100Km .
// * Debes utilizar alguna estructura de repetición vista en la materia.
//  Mostrar por consola el array de competidores antes y después de la ejecución de la función.

let competidores = []

let competidor1 = {
    nombre: 'Juan',
    edad: 42,
    kilometrosRecorridos: 80,
}
    let competidor2 = {
    nombre: 'Sofia',
    edad: 22,
    kilometrosRecorridos: 90
}
    let competidor3 = {
    nombre: 'Maria',
    edad: 45,
    kilometrosRecorridos: 70
}

competidores.push(competidor1)
competidores.push(competidor2)
competidores.push(competidor3)

// console.log(competidores);

let competencia100Km = participantes =>{
    for (let i = 0; i < participantes.length; i++) {
        participantes[i].kilometrosRecorridos += 100
    }
}
competencia100Km(competidores)
// console.log(competidores)
