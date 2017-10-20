//Haciendo una prueba para capturar los valores de las apuestas de cada jugador
//Desde aqui estan las apuestas
var oApuestas = new Array();
var iTurno=0;
var ronda=0;
var bDesi;
var repetir=0;
var pase=0;
var e = 0;
function cargar() {

  if(e==0){
    e++;
    document.getElementById('floop').style.display = "none";
    document.getElementById('turn').style.display = "none";
    document.getElementById('river').style.display = "none";
    document.getElementById('showdown').style.display = "none";
  }else {
  var iJugadores = numero();
if (ronda==0 && iTurno<2) {
/*  if (iTurno==0 || iTurno==1) {**/
    console.log("Turno del jugador "+iTurno);
    document.getElementById("pasar").disabled=true;
    document.getElementById("retirarse").disabled=true;
    document.getElementById("dineroDisponible").innerHTML="Tu dinero es: "+oJugadores[iTurno].apuesta;
    var dineroApostado = document.getElementById("apostarJug").value;
    console.log(dineroApostado);
    oJugadores[iTurno].apuesta=oJugadores[iTurno].apuesta - dineroApostado;
    document.getElementById("apostarJug").value=0;
    bDesi = verificarApuestas(dineroApostado,iJugadores,iTurno);
}else{
    console.log("Turno del jugador "+iTurno);
    document.getElementById("pasar").disabled=false;
    document.getElementById("retirarse").disabled=false;
    document.getElementById("dineroDisponible").innerHTML="Tu dinero es: "+oJugadores[iTurno].apuesta;
    var dineroApostado=document.getElementById("apostarJug").value;
    oJugadores[iTurno].apuesta=oJugadores[iTurno].apuesta - dineroApostado;
    document.getElementById("apostarJug").value=0;
    bDesi = verificarApuestas(dineroApostado,iJugadores,iTurno);
    console.log(bDesi);
  }
    iTurno++;
  if (iTurno==oJugadores.length) {
  //turn();
    iTurno=0;
    if(iTurno==0){
      //console.log("turno");
    ronda++;
  }
    //console.log("bDesi "+bDesi);
    activador(bDesi);
  }
}
}
function verificarApuestas(iApuesta,iJugadores,iTurn){
  var bDecision=false;
  var tamano ;
  console.log("holi");
  if (repetir==0) {
    oApuestas[iTurn] = iApuesta;
  }else {
    oApuestas[iTurn] = parseFloat(oApuestas[iTurn]) + parseFloat(iApuesta);
    console.log(oApuestas[iTurn]);
  }
  //oApuestas.push(iApuesta);
  //tamano = oApuestas.lenght;
  console.log(iJugadores);
  if(iTurn==iJugadores-1){
    console.log("pase");
    oApuestas.sort();
    tamano = oApuestas.length;
    var iMayor= oApuestas[tamano-1];
    console.log(iMayor);
    bDecision = ordenador(iMayor,iJugadores,iTurn);
    return bDecision;
  }else{
  return bDecision;
  }
  }
function ordenador(iMayor,iJugadores,iTurn) {
  console.log("hi");
  var verdadero=0;
  var falso=0;
  for (var i = 0; i < iJugadores; i++) {
    if (iMayor==oApuestas[i]) {
      console.log("es igualito");
      verdadero++;
    }else {
      falso++;
    }
  }
  if (verdadero==iTurn+1) {
    console.log("cumplistes");
    return true;
  }else {
    return false;
  }
}
//Para que se activen los controles
function activador(bDecision) {
  if(bDecision==true){
    //document.getElementById("turn").style.display= "block";
    console.log("pasastes");
    ronda++
    repetir=0;
    if (pase==0) {
      document.getElementById('floop').style.display = "block";
      pase++;
    }else if (pase==1) {
      document.getElementById('turn').style.display = "block";
      pase++;
    }else if (pase==2) {
      document.getElementById("river").style.display = "block";
      pase++;
    }else if (pase==3) {
      document.getElementById('showdown').style.display = "block";
      pase++;
    }
  }else {
    repetir++;
  }
}
