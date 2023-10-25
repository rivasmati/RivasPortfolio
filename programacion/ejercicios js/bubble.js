
let numeros = [14, 5, 16, 2, 9, 25, 1]


const ordenar = arr =>{

    let temporal = undefined

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

// numeros.sort((a, b) => b - a)
ordenar(numeros)
console.log(numeros);

/*-------------------------------------------------------------------------------*/

const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]


const ordenarSaldo = arr =>{
    let temporal = undefined

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {
            
            if (arr[j].edadTitular > arr[j+1].edadTitular){

                temporal = arr[j].edadTitular
                arr[j].edadTitular = arr[j+1].edadTitular
                arr[j+1].edadTitular = temporal

            }
        }
    }
}

// ordenarSaldo(arrayCuentas)
// console.table(arrayCuentas)

let ordenado = arrayCuentas.sort(function (a, b) {
    if (a.edadTitular > b.edadTitular) {
        return -1;
    }
    if (a.edadTitular < b.edadTitular) {
        return 1;
    }
    // a must be equal to b
    return 0;
});

// console.table(ordenado)

// console.table(numeros.sort((a, b) => b - a))
// console.table(numeros.sort((a, b) => a - b))

