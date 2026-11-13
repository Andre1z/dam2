"use strict";

/* ========================================
   MEDIAPIPE HOLISTIC COMPARTIDO

   Hands y Pose (versiones legacy) no pueden
   convivir en la misma página: comparten
   globales de Emscripten (Module, loaders)
   y se pisan entre sí. Holistic devuelve
   manos y pose con un único modelo y una
   única cámara.
======================================== */

let detectorHolistico = null;
let promesaHolistica = null;
const consumidoresHolisticos = {};

function registrarConsumidorHolistico(nombre, callback){

    consumidoresHolisticos[nombre] = callback;

}

function asegurarDeteccionHolistica(){

    if(promesaHolistica){
        return promesaHolistica;
    }

    promesaHolistica = (async()=>{

        if(typeof Holistic === "undefined"){
            throw new Error("MediaPipe Holistic no disponible");
        }

        if(!videoCamara){
            throw new Error("Cámara no disponible");
        }

        detectorHolistico = new Holistic({

            locateFile:(archivo)=>{

                return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${archivo}`;

            }

        });

        detectorHolistico.setOptions({

            modelComplexity:1,

            smoothLandmarks:true,

            minDetectionConfidence:0.7,

            minTrackingConfidence:0.5

        });

        detectorHolistico.onResults((resultados)=>{

            Object.values(consumidoresHolisticos).forEach((callback)=>{

                try{
                    callback(resultados);
                }catch(error){
                    console.error(error);
                }

            });

        });

        await detectorHolistico.initialize();

        const camara = new Camera(
            videoCamara,
            {

                onFrame:async()=>{

                    await detectorHolistico.send({
                        image:videoCamara
                    });

                },

                width:1280,
                height:720

            }
        );

        await camara.start();

    })();

    promesaHolistica.catch(()=>{
        promesaHolistica = null;
    });

    return promesaHolistica;

}

window.registrarConsumidorHolistico =
registrarConsumidorHolistico;

window.asegurarDeteccionHolistica =
asegurarDeteccionHolistica;
