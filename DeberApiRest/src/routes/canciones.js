const { Router } = require("express");
const router = Router();
let albunes = require('../informacion.json');
const fs = require('fs');
const _ =require("underscore");



//Ruta para listar las canciones de un albun
router.get("/:nombre1",(req, res) => {
    const { nombre1 } = req.params;
    canciones=[]
    _.each(albunes, (albun, i) => {
        if (albun.nombre == nombre1) {
            canciones=albun.canciones

        }
    });
    res.json(canciones)
})


//Ruta para crear una cancion
router.post("/:nombre1",(req,res)=>
    {
        const { nombre1 } = req.params;
        const {nombre,anio,compositor,duracion,genero}=req.body;

        if(nombre && anio && compositor && duracion && genero){
            const newCancion= {...req.body}
            _.each(albunes, (albun, i) => {
                if (albun.nombre == nombre1) {
                    albun.canciones.push(newCancion)

                }
            });
            const albunesString=JSON.stringify(albunes);
            fs.writeFileSync("src/informacion.json",albunesString,'utf-8')
            res.json(albunes);
        }
        else {
            res.json("error");

        }


    }
)
//Ruta para eliminar una cancion de un albun
router.delete("/:nombre1&:nombre2",(req,res)=> {

        const { nombre1 } = req.params;
        const { nombre2 } = req.params;
        _.each(albunes, (albun, i) => {
            if (albun.nombre == nombre1) {
                _.each(albun.canciones, (cancion, j) => {
                    if (cancion.nombre == nombre2) {
                    albun.canciones.splice(j,1)

                    }
                });

            }
        });
        const albunesString=JSON.stringify(albunes);
        fs.writeFileSync("src/informacion.json",albunesString,'utf-8')
        res.json(albunes)


    }
);

//Ruta para actualizar una cancion
router.put("/:nombre1&:nombre2",(req,res)=>
    {
        const { nombre1 } = req.params;
        const { nombre2 } = req.params;
        const {nombre,anio,compositor,duracion,genero}=req.body
        if(nombre && anio && compositor && duracion && genero){
            _.each(albunes,(albun,i)=>
                {
                    _.each(albun.canciones,(cancion,i)=>
                        {
                            if (cancion.nombre == nombre2) {
                                cancion.nombre= nombre;
                                cancion.anio= anio;
                                cancion.compositor= compositor;
                                cancion.duracion= duracion;
                                cancion.genero= genero;

                            }


                        }
                    )
                }
            )
            const albunesString=JSON.stringify(albunes);
            fs.writeFileSync("src/informacion.json",albunesString,'utf-8')
            res.json(albunes)
        }
        else{
            res.json("error")
        }
    }
)


module.exports = router;