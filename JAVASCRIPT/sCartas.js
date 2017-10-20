var oCartasComunes = new Array();
var oVariosArreglos = new Array();

var oVarJugador = oVariosArreglos.concat(oJugadores, oCartasComunes);


function floop() {
  for (var i = 0; i < 3; i++) {
    oCartasComunes[i] = darCartas();
  }
}
function turn() {
  oCartasComunes[3]= darCartas();
}
function river() {
  oCartasComunes[4]= darCartas();
}
function unirArray() {
  
}
