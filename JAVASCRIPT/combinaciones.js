var matriz = new Array();
for (var i = 0; i < 25; i++) {
  matriz[i] = new Array();
  for (var i2 = 0; i2 < 3; i2++) {
    matriz[i][i2] = 0;
  }
  }
  var matrizfinal = new Array();
  for (var i = 0; i < 10; i++) {
    matrizfinal[i] = new Array();
    for (var i2 = 0; i2 < 3; i2++) {
      matrizfinal[i][i2] = 0;
    }
    }
  //console.log(matriz[0][1]);
  function combinaciones(vector) {
    var numero=0;
    var paso;
    var valor;
    var contador = 0;
    do{
      paso=false;
      valor = vector[0];
      for (var i = 0; i < 3; i++) {
        matriz[contador][0]=valor;
        matriz[contador][1]=vector[i+1];
        matriz[contador][2]=vector[i+2];
        contador =  contador + 1;
      }
      for (var i = 1; i < 3; i++) {
        matriz[contador][0]=vector[0];
        matriz[contador][1]=vector[i];
        matriz[contador][2]=vector[4];
        contador =  contador + 1;
        }
        if (contador== 25 ) {
          paso = true;
        }
        console.log("numero"+contador);

        if (numero == 5) {
          paso = true;
          break;
        }
        vector = ordenar(vector, numero);
        console.log("cont" + contador);
        numero= numero +1;


    }while(!paso);
for (var i = 0; i < 25; i++) {
  vector[0] = matriz[i][0];
  vector[1] = matriz[i][1];
  vector[2] = matriz[i][2];
  vector[3] = matriz[i][3];
  vector[4] = matriz[i][4];
  vector.sort();
  matriz[i][0] = vector[0];
  matriz[i][1] = vector[1];
  matriz[i][2] = vector[2];
  matriz[i][3] = vector[3];
  matriz[i][4] = vector[4];
  }
  var fila=0;
  /*for (var i = 0; i < 25; i++) {
    for (var i2 = 0; i2 < 3; i2++) {
      console.log(matriz[i][i2]);
    }
  }*/
  for (var i = 0; i < 25; i++) {
    contador=0;
    if(i==0){
      matrizfinal[fila][0] = matriz[i][0];
      matrizfinal[fila][1] = matriz[i][1];
      matrizfinal[fila][2] = matriz[i][2];
      fila=fila+1;
      //console.log(matriz[i][0]);
      //console.log(matriz[i][1]);
      //console.log(matriz[i][2]);
    }
    for (var i2 = 0; i2 < 10; i2++) {
    if (matriz[i][0]==matrizfinal[i2][0] && matriz[i][1]==matrizfinal[i2][1] && matriz[i][2]==matrizfinal[i2][2] ) {
    contador=contador +1;
    }
    }
    if (contador==0) {
      matrizfinal[fila][0] = matriz[i][0];
      matrizfinal[fila][1] = matriz[i][1];
      matrizfinal[fila][2] = matriz[i][2];
      fila=fila+1;
    }
  }
  //for (var i = 0; i < fila; i++) {
  //  for (var i2 = 0; i2 < 3; i2++) {
  //    console.log(matrizfinal[i][i2]);
  //  }
  //}
  }

function ordenar(vector,numero) {
  var tmp = vector[0];
  vector[0]= vector[numero];
  vector[numero]= tmp;
  return vector;
}
