let estudiante = [
    {
        nombre: "Teresa",
        edad: 42
    },
    {
        nombre: "Zaul",
        edad: 12
    },
    {
        nombre: "Antonella",
        edad: 22
    }
]

const ordenar = array => {
    let temp;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {

            if(array[j].edad > array[j + 1].edad){
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
}
ordenar(estudiante)
console.table(estudiante);

/*------------------------------------------------*/

// MULTIPLICAR LOS ELEMENTOS DE LA *DIAGONAL PRINCIPAL*, SOLO LOS MULTIPLOS DE 5

let matriz = [
    [25, 11, 31],
    [9, 15, 27],
    [29, 11, 14]
]

const principalMult = mat =>{
    let acc = 1

    for (let i = 0; i < mat.length; i++) {
        
        if (mat[i][i] % 5 === 0) {
            acc *= mat[i][i]
        }
    }
    return acc
}

total = principalMult(matriz)
console.log(total);

/*------------------------------------------------*/

// RECORRER COLUMNA

let matriz2 = [
    [25,31],
    [9,27],
    [30,24],
    [58]
];

const recorrerCol = mat =>{
    let acc = 0

    for (let i = 0; i < mat.length; i++) {

        if (mat[i][1] !== undefined) {

            if (mat[i][1] % 2 === 0 && mat[i][1] > 15){
                acc += mat[i][1]
            }
        }
    }
    return acc
}

total2 = recorrerCol(matriz2)
console.log(total2);

/*------------------------------------------------*/

// ORDENAR DE FORMA DESCENDENTE

let numeros = [ 522, 122, 2, 155, 741]

const ordenarDesc = (arr,ins) =>{
    if(ins === undefined){
        console.log("hola");
        return
    }

    let temporal = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            
            if (arr[j] < arr[j+1]){

                temporal = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temporal
            }
        }
    }
}
ordenarDesc(numeros,true)
console.log(numeros);

/*------------------------------------------------*/

// DIAGONAL SECUNDARIA

let matriz3 = [
    [25, 11, 31],
    [9, 15, 27],
    [29, 11, 14]
]

const sumaImpares = mat =>{
    let acc = 0

    for (let i = 0; i < mat.length; i++) {
        if (mat[i][mat.length - 1 - i] % 2 !== 0) {
            acc += mat[i][mat.length - 1 - i]
        }
    }
    return acc
}

/*------------------------------------------------*/

// CAMBIAR LOS NUM NEGATIVOS POR POSITIVOS

let matriz4 = [
    [25,-31,12],
    [-10,27,-13],
    [10,-5,-33]
]

const negAPos = mat =>{
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] < 0){
                mat[i][j] = mat[i][j] * (-1)
            }
        }    
    }
}

negAPos(matriz4)
console.log(matriz4);

/*------------------------------------------------*/

let prueba1 = [1,5,2,6,8,4,3,9,7]
let prueba2 = [1,2,3,4,5,6,7,8,9]

const ordenado = arr =>{
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return "no ordenado"
        }
    }
    return "ordenado"
}

console.log(ordenado(prueba1))
console.log(ordenado(prueba2))