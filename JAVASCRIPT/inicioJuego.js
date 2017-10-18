//Hecho por: Edwin Figueroa
//Para index.html
var p;
var cartasDisponibles;



var oJugadores= new Array();
//toma el numero de jugadores en forma global para el uso de esta variable en funciones
function numero() {
  var iJugadores= document.getElementById("jugadores").value;
  return iJugadores;
}

//Para jugadores.html

function botonJugar(){
  p = document.getElementById("principal");
  cartasDisponibles = new Array();
  llenarCartasDisponibles();    // test
    //console.log(oJugadores[iControlador].nombre);
    //console.log(oJugadores[iControlador].puesto);
}
//para el control del ingreso a datos de los jugadores
var iControlador = 0; //variable controladora para la funcion jugadores
var iSumaJugador=2;
function jugadores() {
    var iJugadores = numero();
    var sNombre = document.getElementById("jugador").value;
    var iApuesta = document.getElementById("apuesta").value;
    var sPosicion = "div"+(iControlador+2);
    // test
    //console.log(sPosicion);
    oJugadores[iControlador] = new Jugador(sNombre,iApuesta,sPosicion);
    // test
    //console.log(oJugadores[iControlador].nombre);
    //console.log(oJugadores[iControlador].puesto);
    limpiar();
    iControlador= iControlador + 1;
    controlador(iControlador,iJugadores);

    document.getElementById("sumaJugador").innerHTML="Jugador "+(iSumaJugador)+":";
    iSumaJugador++;
  }

//desabilita los botones de la toma de estos para el control de numero de jugadores
function controlador(iControl,iJugadores) {
  if (iControl==iJugadores) {
    document.getElementById("siguiente").disabled = true;
    document.getElementById("empezar").disabled = false;
    document.getElementById("jugador").disabled=true;
    document.getElementById("apuesta").disabled=true;
    //document.getElementById("sumaJugador").innerHTML="Fin";
    //document.getElementById("cantidadApuesta").innerHTML="Fin";
    //test
    //console.log(oJugadores[2].nombre);
  }else {
    return ;
  }
}
//limpia los controles HTML
function limpiar() {
  document.getElementById("apuesta").value = " ";
  document.getElementById("jugador").value = " ";
}
function posicionamiento() {
  var iJugadores = numero();
  for (var i = 0; i < iJugadores; i++) {
    document.getElementById(oJugadores[i].puesto).innerHTML = "jugador"+(i+1);
  }
}

function llenarCartasDisponibles() {

  for (var y = 0; y < 4; y++) {
    for (var x = 1; x < 14; x++) {
      cartasDisponibles.push("PICTURES/img/"+y+"/"+x+".jpg");
    }
  }
}

function Jugador(sNombre,iApusta,sPuesto) {
  this.nombre = sNombre;
  this.apuesta = iApusta;
  this.carta1 = obtenerCarta();
  this.carta2 = obtenerCarta();
  this.puesto = sPuesto;
}

function obtenerCarta(){
  var carta = Math.ceil(Math.random()*13+1);
  return carta;
}

function obtenerFamilia(){
  var familia = Math.ceil(Math.random()*4+1);
  return familia;
}

function probar() {
  for (var i = 0; i < cartasDisponibles.length; i++) {
    p.innerHTML += cartasDisponibles[i]+"</br>";
  }
}
