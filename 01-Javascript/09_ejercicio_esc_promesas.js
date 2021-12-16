/*
Hacer un ejercicio que me acepte como parametro una variablecon
el path del archivo y el contenido a agregar al contenido del archivo.
la funcion debe tomar stos dos parametrosy leer el archivo y añadir el
texto al final del archivo. A final vamos a leer el archivo nuevamente e
imprimirlo en consola. Todo esto debe ser realizado con promesas
 -Promesa de lectura
 -Promesa de escritura
 */
const fs = require('fs');

function promesaLeerArchivo(path){
    const Promesa1 = new Promise(
        (resolve, reject)=>{

            fs.readFile(
                path, 'utf-8',
                (error,contenido)=>{
                    if(error){
                        reject({mensaje:'Error leyendo contenido ',error:error});
                    }
                    else
                    {
                        resolve(contenido);
                    }
                }
            )
        }
    )
    return Promesa1

}

function promesaEscribirArchivo(path, contenidoActual, nuevoContenido){
    nuevo = contenidoActual+'\n'+nuevoContenido
    const Promesa2 = new Promise(
        (resolve, reject)=>{
            fs.writeFile(
                path,
                nuevo
                ,
                'utf-8',
                (error, nuevo)=>{
                    if(error){
                        reject({mensaje:'Error',error:error});
                    }
                    else{
                        resolve(contenidoActual+'\n'+nuevoContenido);
                    }
                }

            )
        }


    )
    return Promesa2
}
function  ejercicio(path, nuevoContenido){
    promesaLeerArchivo(path)
        .then(
            (datos)=>{
               /* console.log(datos);*/
                return promesaEscribirArchivo(path,datos,nuevoContenido)
            }
        )
        .then(
            (datos1)=>{
                console.log(datos1)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

}

ejercicio("./06-ejemplo.txt","Buenas mañanas")