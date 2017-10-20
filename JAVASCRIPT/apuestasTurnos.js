//Haciendo una prueba para capturar los valores de las apuestas de cada jugador

var dineroTotal=0;
  function apostar() {
      //este es el input de las apuestas
    /*var iApuesta = document.getElementById("apuestaJ").value;
    var dineroApostado=document.getElementById("definirCantidad").value;
      iApuesta=parseInt(iApuesta);
      /*dineroApostado=parseInt(dineroApostado);
    var iNuevoDinero = dineroApostado - iApuesta;
      // este es un elemento para mostrar el dinero disponible de cada jugador
    var p = document.getElementById("dineroDisponible");
      //turno es el indice que indica a que jugador le corresponde el turno
    //oJugador[turno].cantidaJugador -= iApuesta;
      //dineroTotal es el de el centro de la mesa


    dineroTotal+=iApuesta;

    p.innerHTML = "dineroTotal: "+dineroTotal;
    iCantidadNueva.innerHTML="Disponible: "+iNuevoDinero;
    //verificarFlop();
  }*/
}

var iTurno=0;
var ronda=0;
function cargar() {
  if (iTurno==oJugadores.length) {
  //turn();
  iTurno=0;
  ronda++;
  }
if (ronda==0 && iTurno<2) {
/*  if (iTurno==0 || iTurno==1) {**/
    console.log("Turno del jugador "+iTurno);
    document.getElementById("pasar").disabled=true;
    document.getElementById("retirarse").disabled=true;
    document.getElementById("dineroDisponible").innerHTML="Tu dinero es: "+oJugadores[iTurno].apuesta;
    var dineroApostado=document.getElementById("apostarJug").value;
    oJugadores[iTurno].apuesta-=dineroApostado;
    document.getElementById("apostarJug").value="";

}else{
    console.log("Turno del jugador "+iTurno);
    document.getElementById("pasar").disabled=false;
    document.getElementById("retirarse").disabled=false;
    document.getElementById("dineroDisponible").innerHTML="Tu dinero es: "+oJugadores[iTurno].apuesta;
    var dineroApostado=document.getElementById("apostarJug").value;
    oJugadores[iTurno].apuesta-=dineroApostado;
    document.getElementById("apostarJug").value="";
  }
  iTurno++;
}

function verificarApuestas(iApuesta){

}
