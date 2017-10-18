//Heho por: Edwin Figueroa
//Para index.html
var p;
var cartasDisponibles;

//Para jugadores.html

function botonJugar(){
  p = document.getElementById("principal");
  cartasDisponibles = new Array();
  llenarCartasDisponibles();


}

function llenarCartasDisponibles() {

  for (var y = 0; y < 4; y++) {
    for (var x = 1; x < 14; x++) {
      cartasDisponibles.push("PICTURES/img/"+y+"/"+x+".jpg");
    }
  }
}

function Jugador(sNombre) {
  this.nombre = sNombre;
  this.apuesta = iApusta;
  this.carta1 = obtenerCarta();
  this.carta2 = obtenerCarta();
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
