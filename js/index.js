/*
    @autor Fran Jimenez
    @version 1.0
    
*/
// Establecemos el que será el padre de nuestros relojes
const PADRE_CONTENIDO = document.getElementById("main_section-contenido");
const ZONA1 = document.createElement("div");
const ZONA2 = document.createElement("div");
const ZONA3 = document.createElement("div");
const ZONA4 = document.createElement("div");
const ZONA5 = document.createElement("div");

function traerHora() {
  let fechaActual = new Date();
  h = fechaActual.getHours();
  m = fechaActual.getMinutes();
  let horaActual = `${h}:${m}`;
  return horaActual;
}

function dividirHora() {
  let hora_actual = traerHora();
  let horaCortada = hora_actual.split(":", 3);
  return horaCortada;
}

function horaMadrid() {
  let tituloZona = document.createElement("p");
  tituloZona.innerHTML = "Madrid";
  ZONA1.innerHTML = traerHora();
  ZONA1.className = "nueva-zona";
  PADRE_CONTENIDO.appendChild(ZONA1);
  ZONA1.appendChild(tituloZona);
  setTimeout("horaMadrid()", 5000);
}

function horaLondres() {
  let tituloZona = document.createElement("p");
  tituloZona.innerHTML = "Londres";
  ZONA2.innerHTML = `${dividirHora()[0] - 1}:${dividirHora()[1]}`;
  PADRE_CONTENIDO.appendChild(ZONA2);
  ZONA2.appendChild(tituloZona);
  setTimeout("horaLondres()", 5000);
}

function horaLosAngeles() {
  let tituloZona = document.createElement("p");
  tituloZona.innerHTML = "Los Angeles";
  ZONA3.innerHTML = `${dividirHora()[0] - 9}:${dividirHora()[1]}`;
  PADRE_CONTENIDO.appendChild(ZONA3);
  ZONA3.appendChild(tituloZona);
  setTimeout("horaLosAngeles()", 5000);
}

function horaNewYork() {
  let tituloZona = document.createElement("p");
  tituloZona.innerHTML = "New York";
  ZONA4.innerHTML = `${dividirHora()[0] - 6}:${dividirHora()[1]}`;
  PADRE_CONTENIDO.appendChild(ZONA4);
  ZONA4.appendChild(tituloZona);
  setTimeout("horaNewYork()", 5000);
}

function horaSidney() {
  let tituloZona = document.createElement("p");
  tituloZona.innerHTML = "Sidney";
  ZONA5.innerHTML = `${Number(dividirHora()[0]) + 8}:${dividirHora()[1]}`;
  PADRE_CONTENIDO.appendChild(ZONA5);
  ZONA5.appendChild(tituloZona);
  setTimeout("horaSidney()", 5000);
}

window.onload = function () {
  horaMadrid();
  horaLondres();
  horaLosAngeles();
  horaNewYork();
  horaSidney();
};