var sReglasCumplidas="";

//Para la mano mas alta que es la Escalera Real
function escaleraReal() {
  var contador=0;
  if (cartas.get(1).getValor() == 10 && cartas.get(0).getValor()==1) {
    for (var car = 1; car < 4; car++) {
      if (cartas.get(car).getFamilia()==cartas.get(car+1).getFamilia() && cartas.get(car).getValor()==(cartas.get(car+1).getValor()-1)) {
        contador=contador+1;
      }else {
        break;
      }
    }
  }
  if (contador==3) {
    sReglasCumplidas = sReglasCumplidas+ "Cumple con la escalera\n";
  }
}
// Para la mano Escalera de Color
function escaleraColor() {
  var contador=0;
  for (var car = 0; car < 4; car++) {
    if (cartas.get(car).getFamilia() == cartas.get(car+1).getFamilia() && cartas.get(car).getValor() == (cartas.get(car+1).getValor()-1)) {
      contador=contador+1;
    }else {
      break;
    }
  }
  if (contador==4) {
    sReglasCumplidas=sReglasCumplidas+"Cumple con la escalera de color\n";
  }
}
//Para la mano de Pocker
function pocker() {
  var contador=0;
  var limite1;
  var limite2;
  if (cartas.get(0).getValor() == cartas.get(1).getValor()) {
    limite1=0;
    limite2=3;
  }else {
    limite1=1;
    limite2=4;
  }
  for (var car = limite1; car < limite2; car++) {
    if (cartas.get(car).getValor() == cartas.get(car+1).getValor()) {
      contador=contador+1;
    }else {
      break;
    }
  }
  if (contador==3) {
    sReglasCumplidas=sReglasCumplidas+"Cumple con la regla del pocker\n";
  }
}
//Para la mano de Full
function full() {
  var contador=0;
  var limite;
  if (cartas.get(1).getValor()==cartas.get(2).getValor()) {
    limite=3;
  }else {
    limite=2;
  }
  for (var car = 0; car < limite; car++) {
    if (cartas.get(car).getValor() == cartas.get(car+1).getValor()) {
      contador=contador+1;
    }else {
      break;
    }
  }
  for (var car = limite; car < 4; car++) {
    if (cartas.get(car).getValor() == cartas.get(car+1).getValor()) {
      contador=contador+1;
    }else {
      break;
    }
  }
  if (contador==3) {
    sReglasCumplidas=sReglasCumplidas+"Cumple con la regla de full\n";
  }
}
//Para la mano de Color
function color() {
  var contador=0;
  for (var car = 0; car < 4; car++) {
    if (cartas.get(car).getColor() == cartas.get(car+1).getColor()) {
      contador=contador+1;
    }else {
      break;
    }
  }
  if (contador==4) {
    sReglasCumplidas=sReglasCumplidas+"Cumple con la regla de color\n";
  }
}
//Para la mano de Escalera
function escalera() {
  var contador=0;
  for (var car = 0; car < 4; car++) {
    if (cartas.get(car).getValor() == (cartas.get(car+1).getValor()-1)) {
      contador=contador+1;
    }else {
      break;
    }
  }
  if (contador==4) {
    sReglasCumplidas=sReglasCumplidas+"Cumple con la regla de escalera\n";
  }
}
//Para la mano de Trio
function trio() {
  var contador=0;
  var limite1;
  var limite2;
  if (cartas.get(1).getValor() != cartas.get(2).getValor()) {
    limite1=2;
    limite2=4;
  }else {
    if (cartas.get(2).getValor() != cartas.get(3).getValor()) {
      limite1=0;
      limite2=2;
    }else {
      limite1=1;
      limite2=3;
    }
  }
  for (var car = limite1; car < limite2; car++) {
    if (cartas.get(car).getValor() == cartas.get(car+1).getValor()) {
      contador=contador+1;
    }else {
      break;
    }
  }
  if (contador==2) {
    sReglasCumplidas=sReglasCumplidas+"Cumple con la regla del trio\n";
  }
}
