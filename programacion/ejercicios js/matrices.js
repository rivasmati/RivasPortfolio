let gastos = [
    [475 , 137 , 78 , 969 , 327 , 314 , 662],
    [344 , 747 , 243 , 28 , 778 , 195 , 147],
    [131 , 765 , 46 , 753 , 624 , 712 , 575],
    [177 , 772 , 29 , 895 , 131 , 763 , 549],
]



const recorrerFila = ( mat, numFila) =>{
    let acc = 0

    for (let i = 0; i < mat[numFila].length; i++) {
        
        acc += mat[numFila][i]
        
    }
    return acc
}

let totalSemana = recorrerFila(gastos, 2)
console.log(totalSemana);

/*---------------------------------------------------------------------*/

const recorrerCol = (mat, numDia) =>{
    let acc = 0

    for (let i = 0; i < mat.length; i++) {
        
        acc += mat[i][numDia]
        
    }
    return acc
}

let gastosSabados = recorrerCol(gastos, 5)
// console.log(gastosSabados);

/*---------------------------------------------------------------------*/

const recorrerDias = (mat) =>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            acc += mat[i][j]
        }
    }
    return acc
}

let gastosTotales = recorrerDias(gastos)
// console.log(gastosTotales);

/*---------------------------------------------------------------------*/

const calcularSemanas = (mat) =>{
    let semanas = []
    let acc = 0

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            acc += mat[i][j]
        }
        semanas.push(acc)
        acc = 0
    }
    return semanas
}

let gastosSemanas = calcularSemanas(gastos)
// console.log(gastosSemanas);


/*---------------------------------------------------------------------*/

const calcularMayor = (gastosSemanas) =>{
    let mayor = gastosSemanas[0]
    let semana = 0
    for (let i = 1; i < gastosSemanas.length; i++) {
        if(gastosSemanas[i] > mayor){
            mayor = gastosSemanas[i]
            semana = i
        }
    }
    return {
        total: mayor,
        posicion: semana
    }
}

let mayorGasto = calcularMayor(gastosSemanas)
// console.log(`La semana que mas se gasto fue ${mayorGasto.posicion + 1}, y se gasto ${mayorGasto.total}`);


/*---------------------------------------------------------------------*/


//TODO:  CALCULAR CUAL FUE EL DIA QUE MAS SE GASTO Y DE CUANTO FUE
  // SI HAY MAS DE UN DIA CON EL MAYOR GASTO RETORNAR LA PRIMER COINCIDENCIA


let gastos2 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
];

const recorrer = (mat) =>{
    let semana = 0
    let dia = 0
    let mayor = 0

    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < mat[i].length; j++) {

            if(mat[i][j] > mayor){

                mayor = mat[i][j]
                semana = i
                dia = j

            }

        }
        
    }
    return {
        total: mayor,
        fila: semana,
        columna: dia
    }
}

let resultado = recorrer(gastos2)
console.log(`El dia que mas se gasto fue el dia numero ${resultado.columna + 1}, en la posicion ${resultado.columna}, de la semana ${resultado.fila + 1}, y se gasto ${resultado.total}`);