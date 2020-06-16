/*
    @autor Fran Jimenez
    @version 1.0
    
*/

const PADRE_CONTENIDO = document.getElementById("main_section-contenido");
const ZONA1 = document.createElement("div");
const ZONA2 = document.createElement("div");
const ZONA3 = document.createElement("div");
const ZONA4 = document.createElement("div");

const ZONAS = {
  'Madrid': traerHora(),
  'Londres': horaLondres(),
  'Los Angeles': horaLosAngeles(),
  "New York": horaNewYork(),
};

function traerHora() {
  let fechaActual = new Date();
  h = fechaActual.getHours();
  m = fechaActual.getMinutes();
  let horaActual = `${h}:${m}`;
  return horaActual;
}

function horaMadrid() {
  let tituloZona = document.createElement("p");
//   tituloZona.innerHTML = "Madrid";
  ZONA1.innerHTML = traerHora();
  ZONA1.className = "nueva-zona";
  PADRE_CONTENIDO.appendChild(ZONA1);
  ZONA1.appendChild(tituloZona);
  setTimeout("horaMadrid()", 500);
}

function horaLondres() {
  let tituloZona = document.createElement("p");
  let dividirHora = traerHora().split(":", 3);
  let establecerHora = dividirHora[0] - 1;
  tituloZona.innerHTML = "Londres";
  ZONA2.innerHTML = `${establecerHora}:${dividirHora[1]}`;
  PADRE_CONTENIDO.appendChild(ZONA2);
  ZONA2.appendChild(tituloZona);
  setTimeout("horaLondres()", 500);
}

function horaLosAngeles() {
  let tituloZona = document.createElement("p");
  let dividirHora = traerHora().split(":", 3);
  let establecerHora = dividirHora[0] - 9;
  tituloZona.innerHTML = "Los Angeles";
  ZONA3.innerHTML = `${establecerHora}:${dividirHora[1]}`;
  PADRE_CONTENIDO.appendChild(ZONA3);
  ZONA3.appendChild(tituloZona);
  setTimeout("horaLosAngeles()", 500);
}

function horaNewYork() {
  let tituloZona = document.createElement("p");
  let dividirHora = traerHora().split(":", 3);
  let establecerHora = dividirHora[0] - 6;
  tituloZona.innerHTML = "New York";
  ZONA4.innerHTML = `${establecerHora}:${dividirHora[1]}`;
  PADRE_CONTENIDO.appendChild(ZONA4);
  ZONA4.appendChild(tituloZona);
  setTimeout("horaNewYork()", 500);
}

