function cronometro() {
    var jugador1 = "Brian";
    var jugador2 = "Paola";
    if (document.getElementById("jugador").innerHTML == jugador2){
        document.getElementById("jugador").innerHTML =  jugador1;
    } else{
        document.getElementById("jugador").innerHTML =  jugador2;
    }
  }
