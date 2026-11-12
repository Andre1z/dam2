const autor = "Andrei Buga";
const estado = "actualizado";

const  seres = []

const  width = 1000
const  height = 800



class Ser{

  constructor(){

    this.x =
      Math.random() * width

    this.y =
      Math.random() * height


    this.angulo =
      Math.random() *
      Math.PI *
      2


    this.hambre =
      Math.random() * 100

    this.energia =
      Math.random() * 100


    this.velocidad =
      1 + Math.random()




    this.distanciaSensor = 30

    this.anguloSensor = 0.5

    this.radioDeteccion = 12

  }



  sensor(anguloSensor){

    const  angulo =
      this.angulo +
      anguloSensor


    const  sensorX =
      this.x +
      Math.cos(angulo) *
      this.distanciaSensor


    const  sensorY =
      this.y +
      Math.sin(angulo) *
      this.distanciaSensor


    const  distanciaMinima = Infinity


    for(const  otro of seres){

      if(otro === this){
        continue
      }


      const  dx =
        otro.x - sensorX

      const  dy =
        otro.y - sensorY


      const  distanciaCuadrado =
        dx * dx +
        dy * dy


      if(
        distanciaCuadrado <
        this.radioDeteccion *
        this.radioDeteccion
      ){

        const  distancia =
          Math.sqrt(
            distanciaCuadrado
          )


        if(
          distancia <
          distanciaMinima
        ){

          distanciaMinima =
            distancia

        }

      }

    }


    return distanciaMinima

  }



  pensar(){

    const izquierda =
      this.sensor(
        -this.anguloSensor
      )


    const centro =
      this.sensor(0)


    const derecha =
      this.sensor(
        this.anguloSensor
      )



    if(centro !== Infinity){

      if(izquierda > derecha){

        this.angulo -= 0.12

      }else{

        this.angulo += 0.12

      }

    }



    if(izquierda !== Infinity){

      this.angulo += 0.05

    }



    if(derecha !== Infinity){

      this.angulo -= 0.05

    }

  }



  mover(){

    this.x +=
      Math.cos(this.angulo) *
      this.velocidad


    this.y +=
      Math.sin(this.angulo) *
      this.velocidad



    if(this.x < 0)
      this.x = width

    if(this.x > width)
      this.x = 0

    if(this.y < 0)
      this.y = height

    if(this.y > height)
      this.y = 0

  }

}





onmessage = function(event){

  const datos = event.data


  if(datos.tipo === "iniciar"){

    width = datos.width
    height = datos.height


    seres = []


    for(
      const  i = 0;
      i < datos.cantidad;
      i++
    ){

      seres.push(
        new Ser()
      )

    }


    bucle()

  }



  if(datos.tipo === "resize"){

    width = datos.width
    height = datos.height

  }

}



function bucle(){








  const  posiciones =
    new Float32Array(
      seres.length * 2
    )


  const  indice = 0


  for(const  ser of seres){

    ser.pensar()

    ser.mover()


    posiciones[indice++] =
      ser.x

    posiciones[indice++] =
      ser.y

  }






  postMessage(
    posiciones,
    [posiciones.buffer]
  )


  setTimeout(
    bucle,
    0
  )

}
