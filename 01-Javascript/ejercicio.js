const fs = require('fs');


function escribirArchivo(path, contenidoNuevo){
    fs.readFile(
        path,
        'utf-8',
        (error,contenido)=>{
            if(error){
                console.error({mensaje:'Error leyendo contenido ',error:error});
            }
            else
            {

                console.log(contenido);
                contenidoNuevo=contenido+'\n'+contenidoNuevo;
                fs.writeFile(
                    path,
                    contenidoNuevo,
                    'utf-8',
                    (error, contenidoNuevo)=>{
                        if(error){
                            console.error({mensaje:'Error',error:error});
                        }
                        else{
                            console.log("El texto ha sido escrito");
                        }
                    }

                )
            }
        }
    );
}

escribirArchivo('./06-ejemplo.txt','Buenas Noches');



