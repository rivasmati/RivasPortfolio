let misMascotas = []

const hablar = function () {
    return `${this.sonido} ${this.sonido}`
} 

let mascota1 = {
    nombre : "pimpe",
    raza : "golden",
    edad : 3,
    sonido : "guauuu",
    ejecutarSonido : hablar(),
}

let mascota2 = {
    nombre : "pantaleon",
    raza : "pequines",
    edad : 8,
    sonido : "puff",
    ejecutarSonido : hablar(),
}

let mascota3 = {
    nombre : "mishi",
    raza : "gato",
    edad : 12,
    sonido : "que onvre",
    ejecutarSonido : hablar(),
}

misMascotas.push(mascota1,mascota2,mascota3)

const aumentarEdad = (animales)=>{
    for (let i = 0; i < animales.length; i++) {
        console.log(animales[i].edad)
        animales[i].edad ++
        console.log(animales[i].edad)
    }
}

const aumentarEdad2 = (animales)=>{
    for (let i = 0; i < animales.length; i++) {
        if(animales[i].edad < 6){
            animales[i].edad ++
        }else if(animales[i].edad >= 6 && animales[i].edad < 10){
            animales[i].edad += 2
        }else{
            animales[i].edad *= 1.5
        }
    }
}

aumentarEdad2(misMascotas)

/*---------------------------------------------------------------------------------------------*/



// Crear un array llamado misMascotas []

// Dentro de este array crearemos un objeto literal para cada mascota 
// (3 mascotas).

// Cada objeto deberá tener: 
// nombre
// raza
// edad 
// sonido
// y un método que nos retorne ese sonido 2 veces

// AGREGAR CON PUSH
// Cuando esté listo, verificar en consola

// Deberemos crear una función que se llame aumentarEdad que aumente 
// la edad de cada animal en 1.

// Ahora debemos crear otra función, que se llame  aumentarEdad2, 
// que va a hacer un trabajo más fino:

// Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
// Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
// Si la mascota tiene más de 10 años,deberá sumarle la mitad de su edad

// Ahora crearemos una función que va a generar un identificador (ID) 
// en cada objeto, que será secuencial y que empezará en 1.
// Por último eliminaremos la propiedad ‘raza’ , 
// ya que para nosotros todos los animalitos son iguales 💘💞
