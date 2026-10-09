// Entrada
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "w":
      jugador.mover(0, -avance);
      break;

    case "s":
      jugador.mover(0, avance);
      break;

    case "a":
      jugador.mover(-avance, 0);
      break;

    case "d":
      jugador.mover(avance, 0);
      break;

    case " ":
      console.log("SPACE DOWN");
      jugador.disparar();
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

    case " ":
      console.log("SPACE UP");
      break;
  }
});