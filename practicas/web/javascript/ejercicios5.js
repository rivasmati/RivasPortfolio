// console.log(peliculas)



// let mayusculas = peli => peli.toUpperCase()
// console.log(mayusculas(peliculas[1]))

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

let juntarArrays = (peli,peliAnimada) =>{
    for (let i=0; i < peli.length - i ; i++ ){
        peli[i] = peli[i].toUpperCase()
        peli.push(peliAnimada[i].toUpperCase())
    }
    return peli
}

console.log(juntarArrays(peliculas,peliculasAnimadas))
