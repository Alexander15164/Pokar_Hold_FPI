//Muestra segundo
  function llamarsegunda(){
      /*document.body.style.backgroundColor="#55090A";*/
      document.body.style.backgroundImage="url(PICTURES/477025.jpg)";

      document.getElementById("primera").style.display="none";
      document.getElementById("segundaI").style.display="block";

  }
//funcion para validar el ingreso de jugadores
  function ingresoJugadores() {
      var jugadores=document.getElementById("jugadores").value;
      if (jugadores>=2 && jugadores<=10) {
        document.getElementById("jugar").disabled=false;
      }else {
      alert("Ingresa una cantidad valida de jugadores \n Entre 2 a 10 jugadores");}
  }
//Despliega los jugadores ingresados
  function formIngreso(){
    console.log("entro aqui");
    var jugadores=document.getElementById("jugadores").value;
    if (jugadores>=2 && jugadores<=10 && jugadores!=null) {

      document.body.style.backgroundImage="url(PICTURES/477025.jpg)";
      document.getElementById("segundaI").style.display="none";
      document.getElementById("tercera").style.display="block";

      }
      else {
        document.getElementById("indicacion").style.display="block";

      }

  }
//Muestra la mesa distribuida
  function cargarTercera(){
    document.body.style.backgroundImage="url(PICTURES/fondo4.jpg)";
    document.getElementById("segundaII").style.display="none";
    document.getElementById("tercera").style.display="block";
  }
  //Haciendo una prueba para capturar los valores de las apuestas de cada jugador
  function apuestas(){
    var iApustaJ=document.getElementById("apuesta").value;
    return iApustaJ;
  }
  function totalApuesta(){

  }
  function cargarTercera(){
    document.body.style.backgroundImage="url(PICTURES/fondo4.jpg)";
    document.getElementById("segundaII").style.display="none";
    document.getElementById("tercera").style.display="block";
    posicionamiento();
  }

  function formPrincipal(){

    document.body.style.backgroundImage="url(PICTURES/poker2.jpg)";
    document.getElementById("segundaI").style.display="none";
    document.getElementById("primera").style.display="block";

  }

  function formIngresaapuesta(){
    //oculta primer ingreso de datos
    console.log("entro aqui");
    var jugadores=document.getElementById("jugadores").value;
    if (jugadores>=2 && jugadores<=10 && jugadores!=null) {
    document.getElementById("texto1").style.display="none";
    document.getElementById("jugadores").style.display="none";
    document.getElementById("jugar").style.display="none";
    document.getElementById("regresar").style.display="none";
    //muestra segundo ingreso de datos
    document.getElementById("texto2").style.display="block";
    document.getElementById("apuesta").style.display="block";
    document.getElementById("jugar2").style.display="none";
    document.getElementById("regresar2").style.display="none";
    document.getElementById("indicacion").style.display="none";}
    else {
      document.getElementById("indicacion").style.display="block";}
  }
