const edades = [11, 5, 15, 18, 25, 18, 10, 33, 18, 2];

let creadorArr = ( arr )=>{
    let arrMenores = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 18){
            arrMenores.push( arr [i] )
            console.log(arr[i]);
        }
    }
    return arrMenores
}

let edadesMenores = creadorArr(edades)
console.log(edadesMenores);
