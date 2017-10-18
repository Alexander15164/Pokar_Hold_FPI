//Muestra segundo
  function llamarsegunda(){
      document.body.style.backgroundImage="url(PICTURES/477025.jpg)";
      document.getElementById("primera").style.display="none";
      document.getElementById("segundaI").style.display="block";
  }

  function ingresoJugadores() {
      var jugadores=document.getElementById("jugadores").value;
      if (jugadores>=2 && jugadores<=10) {
        document.getElementById("jugar").disabled=false;
      }else {
      alert("Ingresa una cantidad valida de jugadores \n Entre 2 a 10 jugadores");}
  }

  function formIngreso(){
      document.body.style.backgroundImage="url(PICTURES/fondo3.jpg)";
      document.getElementById("segundaI").style.display="none";
      document.getElementById("segundaII").style.display="block";
      var dato=document.getElementById("jugadores").value;
    //  for (var i = 1; i <=dato; i++) {
     document.getElementById("j1").style.display="block";
   //}
  }

   function cargarTercera(){
     console.log("llego aqui");
     document.body.style.backgroundImage="url(PICTURES/fondo4.jpg)";
     document.getElementById("segundaII").style.display="none";
     document.getElementById("tercera").style.display="block";
     posicionamiento();
   }
