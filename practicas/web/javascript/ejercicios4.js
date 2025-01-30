// CICLOS

// FOR 
/*
for(let i = 1 ; i < 10 ; i++){
    // CODIGO
    console.log("hola " + i)
}
*/

/* PAR IMPAR
15 % 2 == 0
15 % 2 != 0
*/

/*
let contadorDeImpares = 0
let contadorDePares = 0

for(let i = 1 ; i <= 10 ; i++ ){
    
    if( i % 2 !== 0){
        
        contadorDeImpares += 1

    }else if(i % 2 === 0){
        
        contadorDePares = contadorDePares + 1
        //contadorDePares ++
    }

}

console.log(contadorDeImpares)
console.log(contadorDePares)
*/

// WHILE 
let i = 0
while (i < 10){
    console.log(i)
    i++
}

// DO WHILE 
let j = 0
do{
    console.log(j)
    j++
}while(j < 10)


/*--------------------------------------------------------------------------*/

let siguientes = numero =>{

    for(let i = numero + 1 ; i <= numero + 10 ; i++){
        console.log(i)
    }
}

siguientes(2)
