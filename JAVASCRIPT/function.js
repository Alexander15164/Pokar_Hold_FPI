//Muestra segundo
  function llamarsegunda(){
      /*document.body.style.backgroundColor="#55090A";*/
      document.body.style.backgroundImage="url(PICTURES/477025.jpg)";

      document.getElementById("primera").style.display="none";
      document.getElementById("segundaI").style.display="block";
      llenarCartasDisponibles();

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
      document.getElementById("segundaII").style.display="block";
      var dato=document.getElementById("jugadores").value;
      document.getElementById("j1").style.display="block";
  }
  //Haciendo una prueba para capturar los valores de las apuestas de cada jugador
  function apostar() {
      //este es el input de las apuestas
    var iApuesta = document.getElementById("apostarJug").value;
      // este es un elemento para mostrar el dinero disponible de cada jugador
    var p = document.getElementById("dineroDisponible");
    iApuesta = parseInt(iApuesta);
      //turno es el indice que indica a que jugador le corresponde el turno
    jugadores[turno].dinero -= iApuesta;
      //dineroTotal es el de el centro de la mesa
    dineroTotal+=iApuesta;
    p.innerHTML = "dinero: "+dineroTotal;
    //verificarFlop();
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
    imagenes();

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
    document.getElementById("jugar").style.display="none";
    document.getElementById("regresarjugadores").style.display="none";
    document.getElementById("indicacion").style.display="none";}
    else {
      document.getElementById("indicacion").style.display="block";}
  }
