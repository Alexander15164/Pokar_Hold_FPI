function ganadores() {
  var iJugadores = numero();
  var mazo = llenador();
var controlador==false;
//Para la mano mas alta que es la Escalera Real
if (controlador==false) {
  var contador=0;
  if (mazo[1].valor == 10 && mazo[0].valor==1) {
    for (var car = 1; car < 4; car++) {
      if (mazo[car].familia==mazo[car+1].familia && mazo[car].valor==(mazo[car+1].valor-1)) {
        contador=contador+1;
      }else {
        break;
      }
    }
  }
  if (contador==3) {
    controlador=true;
    sReglasCumplidas = sReglasCumplidas+ "Cumple con la escalera\n";
  }
}
if (controlador==false) {
  // Para la mano Escalera de Color
      var contador=0;
    for (var car = 0; car < 4; car++) {
      if (mazo[car].familia == mazo[car+1].familia && mazo[car].valor == (mazo[car+1].valor-1)) {
        contador=contador+1;
      }else {
        break;
      }
    }
    if (contador==4) {
      sReglasCumplidas=sReglasCumplidas+"Cumple con la escalera de color\n";
    }
  }
  if (controlador==false) {
    //pocker
      var contador=0;
      var limite1;
      var limite2;
      if (mazo[0].valor == mazo[1].valor {
        limite1=0;
        limite2=3;
      }else {
        limite1=1;
        limite2=4;
      }
      for (var car = limite1; car < limite2; car++) {
        if (mazo[car].valor == mazo[car+1].valor {
          contador=contador+1;
        }else {
          break;
        }
      }
      if (contador==3) {
        sReglasCumplidas=sReglasCumplidas+"Cumple con la regla del pocker\n";
      }
    }
    if(controlador==false){
      //full
        var contador=0;
        var limite;
        if (mazo[1].valor==mazo[2].valor {
          limite=3;
        }else {
          limite=2;
        }
        for (var car = 0; car < limite; car++) {
          if (mazo[car].valor == mazo[car+1].valor {
            contador=contador+1;
          }else {
            break;
          }
        }
        for (var car = limite; car < 4; car++) {
          if (mazo[car].valor == mazo[car+1].valor {
            contador=contador+1;
          }else {
            break;
          }
        }
        if (contador==3) {
          sReglasCumplidas=sReglasCumplidas+"Cumple con la regla de full\n";
        }
      }
       if (controlador==false) {
          //Para la mano de Escalera
            var contador=0;
            for (var car = 0; car < 4; car++) {
              if (mazo[car].valor == (mazo[car+1].valor-1)) {
                contador=contador+1;
              }else {
                break;
              }
            }
            if (contador==4) {
              sReglasCumplidas=sReglasCumplidas+"Cumple con la regla de escalera\n";
            }
          }
      if (controlador==false) {
      //Para la mano de Trio
      var contador=0;
      var limite1;
      var limite2;
      if (mazo[1].valor != mazo[2].valor) {
        limite1=2;
        limite2=4;
      }else {
        if (mazo[2].valor != mazo[3].valor {
          limite1=0;
          limite2=2;
        }else {
          limite1=1;
          limite2=3;
        }
      }
      for (var car = limite1; car < limite2; car++) {
        if (mazo[car].valor == mazo[car+1].valor {
          contador=contador+1;
        }else {
          break;
        }
      }
      if (contador==2) {
        sReglasCumplidas=sReglasCumplidas+"Cumple con la regla del trio\n";
      }
    }

}
var jugador=0;
function llenador() {
  var array = new Array();
  array[0]=oJugadores[jugador].carta1
  array[1]=oJugadores[jugador].carta2
  array[2]=oCartasComunes[0];
  array[3]=oCartasComunes[1];
  array[4]=oCartasComunes[2];
  array[5]=oCartasComunes[3];
  array[6]=oCartasComunes[4];
  return array;
  }
}
