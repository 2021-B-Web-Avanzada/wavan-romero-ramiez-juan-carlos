const { Router } = require("express");
const router = Router();
let albunes = require('../informacion.json');
const fs = require('fs');
const _ =require("underscore");



//Ruta para listar los albunes
router.get("/",(req, res) => {
    res.json(albunes)
})


//Ruta para crear un albun
router.post("/",(req,res)=>
    {
        const {nombre,anio,autor,precio,disponible_en_linea}=req.body;

        if(nombre && anio && autor && precio && disponible_en_linea){
            canciones=[];
            const newAlbun= {...req.body,canciones}
            albunes.push(newAlbun);
            const albunesString=JSON.stringify(albunes);
            fs.writeFileSync("src/informacion.json",albunesString,'utf-8')
            res.json(albunes);
        }
        else {
            res.json("error");

        }


    }
)
//Ruta para eliminar un albun
router.delete("/:nombre1",(req,res)=> {

    const { nombre1 } = req.params;
            _.each(albunes, (albun, i) => {
                if (albun.nombre == nombre1) {
                    albunes.splice(i, 1);

                }
            });
            const albunesString=JSON.stringify(albunes);
            fs.writeFileSync("src/informacion.json",albunesString,'utf-8')
            res.json(albunes)


    }
);

//Ruta para actualizar
router.put("/:nombre1",(req,res)=>
    {
        const { nombre1 } = req.params;
        const {nombre,anio,autor,precio,disponible_en_linea}=req.body
        if(nombre && anio && autor && precio && disponible_en_linea){
            _.each(albunes,(albun,i)=>
                {
                    if(albun.nombre == nombre1){
                        albun.nombre= nombre;
                        albun.anio= anio;
                        albun.precio= precio;
                        albun.disponible_en_linea= disponible_en_linea;
                    }
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