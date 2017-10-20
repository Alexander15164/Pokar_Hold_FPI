var oCartasComunes = new Array();
var oVariosArreglos = new Array();

var oVarJugador = oVariosArreglos.concat(oJugadores, oCartasComunes);


function floop() {
  for (var i = 0; i < 3; i++) {
    oCartasComunes[i] = darCartas();
  }
  e=0;
  cargar();
}
function turn() {
  oCartasComunes[3]= darCartas();
  e=0;
  cargar();
}
function river() {
  oCartasComunes[4]= darCartas();
  e=0;
  cargar();
}
function showdown() {
  ganadores();
  e=0;
  cargar();
}
