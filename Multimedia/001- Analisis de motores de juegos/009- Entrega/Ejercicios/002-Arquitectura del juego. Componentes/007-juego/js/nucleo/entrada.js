// Entrada
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "w":
      jugador.mover(0,0-avance)
      break;

    case "s":
      jugador.mover(0,0+avance)
      break;

    case "a":
      jugador.mover(0-avance,0)
      break;

    case "d":
      jugador.mover(0+avance,0)
      break;
  }
});
document.addEventListener("keyup", function(event) {
  switch (event.key) {
    case "w":
      console.log("UP");
      break;

    case "s":
      console.log("DOWN");
      break;

    case "a":
      console.log("LEFT");
      break;

    case "d":
      console.log("RIGHT");
      break;
  }
});