let numeros = [10, 16, 140, 3, 7, 201 , 5 , 44, 57, 53];

const bubbleSort = (arr, instruccion) => {


let temp;


for(i = 0 ; i < arr.length; i++){
    for (j = 0 ; j < arr.length -1; j++){
        console.log("hola");
        if(instruccion == 'ascendente'){
            if( arr[j] > arr[j+1]){

                temp= arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
            }
        } else if (instruccion =='descendente'){

           if (arr[j] < arr[j+1]) {

            temp = arr[j]
            arr[j] = arr[j+1]
            arr[j + 1] = temp            
           }
        }

    }
 
}
}
	
// Para analizar el correcto funcionamiento se solicita imprimir por consola el array antes y después de ejecutar la función. 

console.log(numeros);
bubbleSort(numeros, 'descendente')
console.log(numeros);