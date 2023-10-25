// Ejercicio 1: 
// Desarrollar una función para cada uno de las siguientes apartados: 
// Que reciba por parámetro un número entero y retorne su triple.
// Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
// Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos.

let triple = numero => {
    if(numero % 1 === 0){
        return numero * 3
    }else{
        return "error" 
    }
}

let multiplicacion = (x,y) => {
    if(x % 1 === 0 && y % 1 === 0){
        return x * y
    }else{
        return "error" 
    }
}

let division = (x,y) =>{
    if(x !== 0 && y !== 0 && x % 1 === 0 && y % 1 === 0){
        return x / y
    }else{
        return "error" 
    }
}

console.log(triple(3));
console.log(multiplicacion(6,2));
console.log(division(6,2));


/*-----------------------------------------------------------------------------------------------*/

// Ejercicio 2:
//  Deberás escribir un objeto literal llamado turista que contenga las siguientes propiedades que 
// deberás completar con tus datos:
// nombre
// apellido 
// temperatura
// está Vacunado (TRUE/FALSE)

let turista = {
    nombre : "Pepito",
    apellido : "Garcia",
    temperatura : 33,
    estaVacunado : false
}

// 2. Teniendo en cuenta los datos del punto número 1:
// Crear una función que reciba por parámetro el objeto y retorne un string en base a las siguientes condiciones : 
// -	si temperatura es menor a 37:  “puede pasar”,
// -	 si temperatura es mayor o igual a 37 y menor que 39 y si está vacunado: “puede pasar porque está vacunado”
// -	si temperatura es 39 o mayor: “no puede pasar“
// *Deberás realizar la invocación de la función de forma que se pueda ver el resultado 

let ingreso = visita =>{
    if(visita.temperatura < 37){
        return "puede pasar"
    }else if(visita.temperatura >= 37 && visita.temperatura < 39 && visita.estaVacunado == true){
        return "puede pasar porque está vacunado"
    }else{
        return "no puede pasar"
    }
}
console.log(ingreso(turista))


/*----------------------------------------------------------------------------------------------------*/

// Ejercicio 3:
// Crear un array VACÍO llamado destinos. 
// Dados estos tres objetos:
// let brasil = {
//   cantidadDeVisitas : 3,
//   clima: "soleado",
//   habitantes: "212 millones"
//  }
//  let rusia = {
//   cantidadDeVisitas : 4,
//   clima: "frío",
//   habitantes: "144 millones"
//  }
//  let estadosUnidos = {
//   cantidadDeVisitas : 1,
//   clima: "nublado",
//   habitantes: "329 millones"
//  }


// Agregarlos al array. (utilizando un método JS, pensa cuál podrías utilizar)
// Mostrar por consola el array para ver que contenga esos objetos.
// Crea una función que reciba el array destinos como parámetro, e incremente en 1 la cantidad de visitas de cada uno de los destinos, 
// llámala siguienteViaje. 
// * Debes utilizar alguna estructura de repetición vista en clase.
//  Mostrar por consola el array de destinos antes y después de la ejecución de la función. 

let destinos = []

let brasil = {
    cantidadDeVisitas : 3,
    clima: "soleado",
    habitantes: "212 millones"
}
let rusia = {
    cantidadDeVisitas : 4,
    clima: "frío",
    habitantes: "144 millones"
}
let estadosUnidos = {
    cantidadDeVisitas : 1,
    clima: "nublado",
    habitantes: "329 millones"
}

destinos.push(brasil)
destinos.push(rusia)
destinos.push(estadosUnidos)

console.log(destinos);

let siguienteViaje = arrViaje =>{
    for (let i = 0; i < arrViaje.length; i++) {
        arrViaje[i].cantidadDeVisitas += 1
    }
}
siguienteViaje(destinos)
console.log(destinos);
