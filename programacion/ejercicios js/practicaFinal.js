// Tenés un array de estudiantes con su desempeño académico actual.
// - Crear una función que que reciba por parámetro un array de estudiantes.
// - Deberá incremente 2 puntos la propiedad notaConcepto a los estudiantes
// cuya notaContenido sea mayor o igual a 6

let estudiantes = [
{ nombre: 'Juan', notaConcepto: 6, notaContenido: 6 },
{ nombre: 'Mario', notaConcepto: 8, notaContenido: 8 },
{ nombre: 'Julia', notaConcepto: 8, notaContenido: 5 },
{ nombre: 'Sofia', notaConcepto: 2, notaContenido: 4 }
]

const notaEstudiantes = est =>{
    for (let i = 0; i < est.length; i++) {
        if (est[i].notaContenido >= 6) {
            est[i].notaConcepto += 2 
            console.log("hola");
        }
    }
}

// notaEstudiantes(estudiantes)
// console.log(estudiantes);

/*-----------------------------------------------*/

// Desarrollar una función que reciba por parámetro él array de países y ordene de
// forma ascendente según su población

let paises = [
    {
        nombre: "Venezuela",
        continente: "Sudamerica",
        poblacion: 25000000
    },
    {
        nombre: "Australia",
        continente: "Oceania",
        poblacion: 18000000
    },{
        nombre: "Tailandia",
        continente: "Asia",
        poblacion: 32000000
    },
    {
        nombre: "Francia",
        continente: "Europa",
        poblacion: 65000000
    }
]

const ordenarPais = arr =>{
    let temporal = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            
            if (arr[j].poblacion > arr[j+1].poblacion){

                temporal = arr[j].poblacion
                arr[j].poblacion = arr[j+1].poblacion
                arr[j+1].poblacion = temporal

            }
        }
    }
}

ordenarPais(paises)
console.table(paises)

/*-----------------------------------------------*/

// a. Crear una matriz de 4 filas x 5 columnas de numeros enteros
// b. Crear una función que reciba la matriz generada por parámetro, deberá retornar la
// sumatoria de todos los valores excepto de la cuarta columna
// c. Crear una función que reciba la matriz generada por parámetro y un valor numérico,
// deberá retornar un array con todos los valores menores al parámetro recibido como
// valor Numérico

let matriz = [
    [23 , 41 , 2 , 13 , 6],
    [7 , 26 , 31 , 56 , 2],
    [42 , 42 , 7 , 94 , 14],
    [31 , 38 , 74 , 8 , 95]
]

const suma = mat =>{
    let acc = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if(j !== 3){
                acc += mat[i][j]
            }
        }
    }
    return acc
}

console.log(suma(matriz));

const menores = (mat, num) =>{
    let arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] < num){
                arr.push(mat[i][j])
            }
        }
    }
    return arr
}

console.log(menores(matriz,30));

/*-------------------------------------------*/

function tablaDeMultiplicar(numero) {
	let i = 0
	while (i <= 10){
		console.log(numero + "*" + i + "=" + i*numero)
		i++
	}
}

tablaDeMultiplicar(5)