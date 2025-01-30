/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Indique su nombre");
  anho = prompt("Indique su año de nacimiento");
  datosPersona.edad = 2022 - parseInt(anho);
  datosPersona.ciudad = prompt("Indique su ciudad");
  datosPersona.interesPorJs = confirm("Tenes interes por JavaScript?");
  

  console.table(datosPersona);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const ciudad = document.querySelector("#ciudad");
  const javascript = document.querySelector("#javascript");

  nombre.innerHTML = `${datosPersona.nombre}`;
  edad.innerHTML = `${datosPersona.edad}`;
  ciudad.innerHTML = `${datosPersona.ciudad}`;
  javascript.innerHTML = `${datosPersona.interesPorJs == true ? "SI" : "NO"}`;
  console.log(datosPersona.interesPorJs);


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  materias = document.querySelector("#fila");

  listado.forEach((materia) => {
    materias.innerHTML += `
    <article   class="caja">
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
      <p>${materia.lenguajes}</p>
      <p>${materia.bimestre}</p>
    </article>  
    `
  });
  
  materiasBtn.removeEventListener("click",recorrerListadoYRenderizarTarjetas);

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let oscuro = document.querySelector("#sitio");

  oscuro.classList.toggle("dark");

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener('keydown', (event) => {
  var keyValue = event.key;
  let oculto = document.querySelector(".oculto");

  if(keyValue === "f" || keyValue === "F"){
    oculto.classList.remove("oculto");
  }
}, false);