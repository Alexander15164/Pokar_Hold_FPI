//Muestra segundo
  function llamarsegunda(){
      /*document.body.style.backgroundColor="#55090A";*/
      document.body.style.backgroundImage="url(PICTURES/fondo20.jpg)";

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
      document.body.style.backgroundImage="url(PICTURES/fondo3.jpg)";
      document.getElementById("segundaI").style.display="none";
      document.getElementById("segundaII").style.display="block";
      var dato=document.getElementById("jugadores").value;
<<<<<<< HEAD
//<<<<<<< HEAD
      document.getElementById("j1").style.display="block";
=======
      document.getElementById("j1").style.display="block";

>>>>>>> b3e930ff34bb6aec127e3d559a16c04dba03b508
  }
//Muestra la mesa distribuida
  function cargarTercera(){
    console.log("llego aqui");
    document.body.style.backgroundImage="url(PICTURES/fondo4.jpg)";
    document.getElementById("segundaII").style.display="none";
    document.getElementById("tercera").style.display="block";
  }
  //Haciendo una prueba para capturar los valores de las apuestas de cada jugador
  function apuestas(){
<<<<<<< HEAD

  }
//=======
    //  for (var i = 1; i <=dato; i++) {
    
   //}


   function cargarTercera(){
     console.log("llego aqui");
     document.body.style.backgroundImage="url(PICTURES/fondo4.jpg)";
     document.getElementById("segundaII").style.display="none";
     document.getElementById("tercera").style.display="block";
     posicionamiento();
   }
//>>>>>>> 39a7e528ae0d0cb14b32acae0a2f5ca7c6ebebd3
=======
    var iApustaJ=document.getElementById("apuesta").value;
    return iApustaJ;
  }
  function totalApuesta(){

  }
/////////////////////////////
  function cargarTercera(){
    console.log("llego aqui");
    document.body.style.backgroundImage="url(PICTURES/fondo4.jpg)";
    document.getElementById("segundaII").style.display="none";
    document.getElementById("tercera").style.display="block";
    posicionamiento();
  }
>>>>>>> b3e930ff34bb6aec127e3d559a16c04dba03b508
