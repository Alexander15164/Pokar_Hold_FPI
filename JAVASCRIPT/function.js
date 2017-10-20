//Muestra segundo
//monzon
  function llamarsegunda(){
      /*document.body.style.backgroundColor="#55090A";*/
      document.body.style.backgroundImage="url(PICTURES/477025.jpg)";

      document.getElementById("primera").style.display="none";
      document.getElementById("segundaI").style.display="block";
      llenarCartasDisponibles();

  }
//funcion para validar el ingreso de jugadores
//monzon
  function ingresoJugadores() {
      var jugadores=document.getElementById("jugadores").value;
      if (jugadores>=2 && jugadores<=10) {
        document.getElementById("jugar").disabled=false;
      }
       else {
      alert("Ingresa una cantidad valida de jugadores \n Entre 2 a 10 jugadores");}
  }
//Despliega los jugadores ingresados
//monzon
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
//Haciendo una prueba para capturar los valores de las apuestas de cada jugador

//Muestra la mesa distribuida

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

//carga pantalla de JUEGOS
//monzon

  //Haciendo una prueba para capturar los valores de las apuestas de cada jugador


  function cargarTercera(){

    var jugadores=document.getElementById("jugadores").value;
    var apuestana=document.getElementById("apuesta").values;

    if (jugadores>=2 && jugadores<=10) {

        fJugadores();
        document.body.style.backgroundColor="#354560";
        //document.body.style.backgroundImage="url(PICTURES/fondo4.jpg)";
        document.body.style.backgroundImage="none";
        document.getElementById("segundaI").style.display="none";
        document.getElementById("tercera").style.display="block";
        //document.getElementsByClassName("subcap1").backgroundImage("PICTURES/carta1.jpg")
        cargar();
        posicionamiento();
          imagenes();
    }


  }
//monzon
  function formPrincipal(){

    document.body.style.backgroundImage="url(PICTURES/poker2.jpg)";
    document.getElementById("segundaI").style.display="none";
    document.getElementById("primera").style.display="block";

  }
