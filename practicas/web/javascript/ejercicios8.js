//EJERCICIO 1
for (let i = 1; i <= 100; i++) {
if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
} else if (i % 5 === 0) {
    console.log("Buzz");
} else if (i % 3 === 0) {
    console.log("Fizz");
} else {
    console.log(i);
}
}

//EJERCICIO 2

let array2 = [
3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
100,
];

let indice = 10;

const buscar = (arr, posicion) => {
    console.log(arr[posicion]);
};
// Invoca tu función debajo de esta linea.
buscar(array2, indice);

//EJERCICIO 3

// Escribe tu función aquí:
function diasDelMes(numeroMes) {
    let array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return array[numeroMes - 1];
}

// E invocala:
console.log(diasDelMes(6));

//EJERCICIO 4

const revertir = (num) => {
    return parseFloat(num.toString().split("").reverse().join(""));
};

console.log(revertir(12345));


//EJERCICIO 5

let array3 = [
3,
6,
67,
6,
23,
11,
100,
8,
93,
0,
17,
24,
7,
1,
33,
45,
28,
33,
23,
12,
99,
100
];

const repetir = (arr) => {
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
        console.log(arr[i]);
    }
    }
}
};

repetir(array3);