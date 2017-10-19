
//Modificado por katiro
//Para index.html
var p;
var cartasDisponibles;
var oCartas = new Array();
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
  //llenarCartasDisponibles();    // test
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
  //test
  //console.log(oJugadores[0].carta1.valor);

}else {
  return ;
}if (iControl==iJugadores) {
    document.getElementById("siguiente").disabled = true;
    document.getElementById("empezar").disabled = false;
    document.getElementById("jugador").disabled=true;
    document.getElementById("apuesta").disabled=true;
  }else {
    return ;
  }
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

//llenador de cartas en un arreglo global
function llenarCartasDisponibles() {
  var iPosicion = 0
  while (iPosicion < 52) {
    var oCart = new cartas();
    if (iPosicion == 0) {
    oCartas.push(oCart);
    iPosicion = iPosicion + 1;
  }else {
    var bBoolean = Verifcador(oCart);
    if (bBoolean == false) {
      oCartas.push(oCart);
      iPosicion = iPosicion + 1;
    }
}
  }
//imprimir();
}
  function Jugador(sNombre,iApusta,sPuesto) {
  this.nombre = sNombre;
  this.apuesta = iApusta;
  this.carta1 = darCartas();
  this.carta2 = darCartas();
  this.puesto = sPuesto;
  }


function obtenerCarta(){
  var carta = Math.ceil(Math.random()*13+1);
  return carta;
}

function obtenerFamilia(){
  var familia = Math.ceil(Math.random()*3+1);
  return familia;
}

function probar() {
  for (var i = 0; i < cartasDisponibles.length; i++) {
    p.innerHTML += cartasDisponibles[i]+"</br>";
  }
}
//sistema de posicionsmiento de imagenes
function imagenes(){}

function cartas() {
  this.familia = obtenerFamilia();
  this.valor = obtenerCarta();
  this.direccion = obtenerDirecion(this.familia,this.valor);
  //this.color = obtenerColor(this.familia);
}
/*function obtenerColor(iFamilia) {
  if (iFamilia==0 || iFamilia==2) {
    return 1;//rojo
  }else {
    return 2;//negro
  }
}*/
function obtenerDirecion(sFamilia,sValor) {
sValor = String(sValor);
sFamilia = String(sFamilia);
var sImagen = "PICTURES/img/"+sFamilia+"/"+sValor+".jpg";
return sImagen;
}
function darCartas() {
  var iCarta = oCartas.pop();
  return iCarta;
}
//testing
/*function imprimir() {
  for (var i = 0; i < oCartas.length; i++) {
    console.log(oCartas[i].familia);
    console.log(oCartas[i].valor);

  }
}*/
function Verifcador(oCart) {
  var iTamano = oCartas.lenght
  var bVerdad = false;
  for (var i = 0; i < iTamano; i++) {
  if (oCart.valor == oCartas[i].valor && oCart.familia == oCartas[i].familia) {
    console.log("son iguales");
    bVerdad=true;
    return bVerdad;
  }
}return bVerdad;
}
