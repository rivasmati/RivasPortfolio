// Crear una función que reciba como parámetro un arreglo de objetos y un continente.
//  La función deberá retornar un nuevo arreglo llamado ‘paisesSoleados’ que contenga 
//  sólo los objetos cuyos países sean del continente pasado por parámetro, y que dichos 
//  países tengan un clima soleado.

let paises = [
    {
    nombre: "Argentina",
    continente: "Sudamerica",
    clima: 'nublado'
    },
    {
    nombre: "Brasil",
    continente: "Sudamerica",
    clima: 'soleado'
    },
    {
    nombre: "Venezuela",
    continente: "Sudamerica",
    clima: 'soleado'
    },
    {
    nombre: "Chile",
    continente: "Sudamerica",
    clima: 'lluvioso'
    },
    {
    nombre: "Australia",
    continente: "Oceania",
    clima: 'soleado'
    },
    {
    nombre: "Nueva Zelanda",
    continente: "Oceania",
    clima: 'lluvioso'
    }
];


const soleados = (arr,continente)=>{
    let paisesSoleados = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].continente === continente) {
            if (arr[i].clima === 'soleado') {
                paisesSoleados.push(arr[i])
            }
        }
    }
    return paisesSoleados
}

// console.table(soleados(paises,"Sudamerica"))

/*---------------------------------------------------------*/

// Crear una función llamada bubbleSort que reciba como parámetros un array 
// y un booleano que represente el sentido de ordenamiento, la función deberá 
// realizar un ordenamiento interno del array según el orden indicado:

let numeros = [20, 6, 10, 3, 27, 1 , 522 , 100, 17, 53];


const ordenar = (arr, forma) =>{
    let temporal = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            
            if (arr[j] > arr[j+1] && forma == true){

                temporal = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temporal

            }else if (arr[j] < arr[j+1] && forma == false){
                
                temporal = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temporal
            }
        }
    }
}

// console.log(numeros);
// ordenar(numeros,true)
// console.log(numeros);
// ordenar(numeros,false)
// console.log(numeros);

/*---------------------------------------------------------*/

// Crear una matriz de 5 x 7
// Crear una función que reciba a la matriz creada por parámetro, y que sume todos 
// los valores que sean pares y menores a 9. Retornar la suma.
// Crear una función que reciba a la matriz creada por parámetro, que recorra la 
// fila 3 y modifique cada elemento por su negativo
// Por ejemplo: si el número del elemento es 5 lo cambiamos por -5

let matriz = [
    [57 , 61 , 3 , 8 , 83 , 33 , 39],
    [31 , 22 , 77 , 66 , 20 , 20 , 88],
    [15 , 34 , 57 , 60 , 38 , 4 , 71],
    [42 , 92 , 99 , 47 , 31 , 78 , 96],
    [24 , 97 , 41 , 84 , 49 , 6 , 20],
]

const parMenores = mat =>{
    let acc = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] < 9 && mat[i][j] % 2 === 0){
                acc += mat[i][j]
            }
        }
    }
    return acc
}

// console.log(parMenores(matriz))

const aNegativos = mat =>{
    for (let i = 0; i < mat[2].length; i++) {
        mat[2][i] *= (-1)
    }
}

// console.table(matriz)
// aNegativos(matriz)
// console.table(matriz)