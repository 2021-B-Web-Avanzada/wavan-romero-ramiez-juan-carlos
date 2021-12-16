const fs = require('fs');
const inquirer = require("inquirer");
const respuesta = require("inquirer");
const respuesta1 = require("inquirer");



class Albun{
    constructor(nombre,anio,autor,precio,disponible) {
        this.nombre=nombre;
        this.anio=anio;
        this.autor=autor;
        this.precio=precio;
        this.disponible_en_linea=disponible;
        this.canciones=[];

    }
}

class Cancion{
    constructor(nombre,anio,compositor,duracion,genero) {
        this.nombre=nombre;
        this.anio=anio;
        this.compositor=compositor;
        this.duracion=duracion;
        this.genero=genero;
    }
}

class ListaDeAlbunes {
    constructor() {
        this.lista=[]
    }


    listarAlbunes(){
        let lista=""
        this.lista.forEach(function (a,b){
            lista+=a.nombre+", "+a.autor+"\n";
        });
        return lista;
    }






    async  seleccionarAlbun(){
        try {
            const respuesta = await inquirer

                .prompt([
                    {
                        type: "input",
                        name: "Opcion",
                        message: "Albunes \nIngrese el nombre del albun que desee ver",
                    }
                ]);
            let c
            this.lista.forEach(function (a,b) {
                if(a.nombre==respuesta.Opcion){
                    c=b
                }
            })
            console.log(this.lista[c].nombre+", "+this.lista[c].autor+", "+this.lista[c].anio+", "+this.lista[c].disponible_en_linea+", "+this.lista[c].precio+"\n")
            console.log(this.lista[c].canciones)
            let variable=respuesta.Opcion
            return variable

        } catch (e) {

        }

    };


    async  seleccionarOpcion(nombreAlbun){
        try {
            const respuesta = await inquirer

                .prompt([
                    {
                        type: "list",
                        name: "Opcion",
                        message: "Albunes \nIngrese una opcion",
                        choices: ["añadir cancion", "eliminar cancion", "modificar cancion"]
                    }
                ]);
            let areglo=[]
            areglo.push(nombreAlbun)
            areglo.push(respuesta.Opcion)
            return areglo;

        } catch (e) {

        }



    };







    async  añadircancion(areglo){
        try {
            const respuesta = await inquirer

                .prompt([
                    {
                        type: "input",
                        name: "nombre",
                        message: "Ingrese el nombre de la cancion"
                    },
                    {
                        type: "input",
                        name: "anio",
                        message: "Ingrese el año de la cancion"
                    },
                    {
                        type: "input",
                        name: "compositor",
                        message: "Ingrese el compositor de la cancion"
                    },

                    {
                        type: "input",
                        name: "duracion",
                        message: "Ingrese la duracion de la cancion"
                    },

                    {
                        type: "input",
                        name: "genero",
                        message: "Ingrese el genero de la cancion"
                    }
                ])
            const cancion = new Cancion(respuesta.nombre,respuesta.anio,respuesta.compositor, respuesta.duracion, respuesta.genero)
            let g
            this.lista.forEach(function (a,b) {
                if(a.nombre==areglo[0]){
                    g=b
                }

            })

            this.lista[g].canciones.push(cancion)

            return "hola"


        } catch (e) {

        }

    };










    async modificarCancion(areglo){
        try {
            const respuesta = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "Opcion",
                        message: "Albunes \nIngrese el nombre de la cancion que desea modificar \n",
                    }
                ])

            areglo.push(respuesta.Opcion)
            return areglo

        } catch (e) {

        }


    }
    async modificarCancion2(areglo){
        try {
            const respuesta = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "nombre",
                        message: "Ingrese el nombre de la cancion"
                    },
                    {
                        type:"input",
                        name:"compositor",
                        message:"Ingrese el nombre del compositor"
                    },
                    {
                        type: "input",
                        name: "anio",
                        message: "Ingrese el anio de la cancion"
                    },
                    {
                        type: "input",
                        name: "duracion",
                        message: "Ingrese la duracion de la cancion"
                    },
                    {
                        type: "input",
                        name: "genero",
                        message: "Ingrese el genero de la cancion",
                    },
                ])

            let g,h

            this.lista.forEach(function (a,b) {
                if(a.nombre==areglo[0]){
                    g=b
                }

            })

            this.lista[g].canciones.forEach(function (a,b) {
                if (a.nombre == areglo[2]) {
                    h=b;
                }
            })
            this.lista[g].canciones[h].nombre = respuesta.nombre;
            this.lista[g].canciones[h].compositor = respuesta.compositor;
            this.lista[g].canciones[h].anio = respuesta.anio;
            this.lista[g].canciones[h].duracion = respuesta.duracion;
            this.lista[g].canciones[h] = respuesta.genero;

            return "hola como esta";

        } catch (e) {

        }


    }





































    async  eliminarcancion(areglo){
        try {
            const respuesta = await inquirer

                .prompt([
                    {
                        type: "input",
                        name: "cancion",
                        message: "Ingrese el nombre de la cancion"
                    }
                ])

            let g
            this.lista.forEach(function (a,b) {
                if(a.nombre==areglo[0]){
                    g=b
                }

            })
            let h
            this.lista[g].canciones.forEach(function (a,b){
                if(a.nombre==respuesta.cancion){
                    h=b
                }

            })

            this.lista[g].canciones.splice(h,1)
            return "hola"


        } catch (e) {

        }

    };









































    async  eliminarAlbun(lista){
        try {
            const respuesta = await inquirer

                .prompt([
                    {
                        type: "input",
                        name: "Opcion",
                        message: "Albunes \nIngrese el nombre del albun que desea eliminar \n"+lista+"\n",
                    }
                ]);
            let aux
            this.lista.forEach(function (a,b){
                if (a.nombre == respuesta.Opcion){
                    aux=b;

                }
            })
            this.lista.splice(aux,1)


        } catch (e) {

        }
    };

    async modificarAbun(lista){
        try {
            const respuesta = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "Opcion",
                        message: "Albunes \nIngrese el nombre del albun que desea modificar \n"+lista+"\n",
                    }
                ])

            return respuesta.Opcion

        } catch (e) {

        }
        return respuesta.Opcion

    }
    async modificarAbun2(nombreAlbun){
        try {
            const respuesta = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "nombre",
                        message: "Ingrese el nombre del albun"
                    },
                    {
                        type:"input",
                        name:"autor",
                        message:"Ingrese el nombre del autor"
                    },
                    {
                        type: "input",
                        name: "anio",
                        message: "Ingrese el anio del albun"
                    },
                    {
                        type: "input",
                        name: "precio",
                        message: "Ingrese el precio del albun"
                    },
                    {
                        type: "list",
                        name: "disponibilidad",
                        message: "Esta disponible en linea",
                        choices: ["true","false"]
                    },
                ])

            let c,d
            if(respuesta.disponibilidad=="true"){
                c=true
            }
            else{
                c=false
            }
            this.lista.forEach(function (a,b) {
                if (a.nombre == nombreAlbun) {
                    d=b;
                }
            })
            this.lista[d].nombre = respuesta.nombre;
            this.lista[d].autor = respuesta.autor;
            this.lista[d].precio = respuesta.precio;
            this.lista[d].anio = respuesta.anio
            this.lista[d].disponible_en_linea = c;

        } catch (e) {

        }
        return "hola como esta";

    }

    async   aniadirAlbun(){
        try {
            const respuesta = await inquirer
                .prompt([
                    {
                        type: "input",
                        name: "nombre",
                        message: "Ingrese el nombre del albun"
                    },
                    {
                        type:"input",
                        name:"autor",
                        message:"Ingrese el nombre del autor"
                    },
                    {
                        type: "input",
                        name: "anio",
                        message: "Ingrese el anio del albun"
                    },
                    {
                        type: "input",
                        name: "precio",
                        message: "Ingrese el precio del albun"
                    },
                    {
                        type: "list",
                        name: "disponibilidad",
                        message: "Esta disponible en linea",
                        choices: ["true","false"]
                    }


                ]);
            let a
            if(respuesta.disponibilidad=="true"){
                a=true
            }
            else{
                a=false
            }
            const albun = new Albun(respuesta.nombre,respuesta.anio,respuesta.autor,respuesta.precio,a);
            this.lista.push(albun)

        }catch (e){
            console.log(e)
        }}











}
listadeAlbunes = new ListaDeAlbunes();





function leerArchivo(path,listadealbunes){

    const Promesa = new Promise(
        (resolve, reject)=>{
            let archivo = fs.readFileSync(path, 'utf-8');
            let arregloDeAlbunes = archivo.split("*");
            if(1==2){
                reject({mensaje:'Error',error:error});
            }
            else{
                resolve("hola");
            }
            arregloDeAlbunes.forEach(function(albunes, index) {
                if(albunes) {
                    let aux1 = albunes.split(";");
                    const albun = new Albun(aux1[0], aux1[1], aux1[2], aux1[4], aux1[3]);
                    let aux2 = aux1[5].split("|");
                    aux2.forEach(function (canciones, index) {
                        if(canciones) {
                            let aux3 = canciones.split(",")
                            const cancion = new Cancion(aux3[0], aux3[1], aux3[2], aux3[3], aux3[4])
                            albun.canciones.push(cancion);
                        }
                    });
                    listadealbunes.lista.push(albun);
                }
            })
        }


    )
    return Promesa
}


function escribirArchivo(path,listadealbunes){
    const Promesa2 = new Promise(
        (resolve, reject)=>{
            let variable=""
            listadealbunes.lista.forEach(function (a,b){
                variable+="*"+a.nombre+";"+a.anio+";"+a.autor+";"+a.disponible_en_linea+";"+a.precio+";";
                a.canciones.forEach(function (d,e){
                    variable+="|"+d.nombre+","+d.anio+","+d.compositor+","+d.duracion+","+d.genero
                })

            })
            listadealbunes.lista=[]

            fs.writeFileSync(

                path,
                variable,
                'utf-8',
                (error, contenidoNuevo)=>{
                    if(error){
                        reject({mensaje:'Error',error:error});
                    }
                    else{
                        resolve("El texto ha sido escrito");
                    }
                }

            )
        }


    )
    return Promesa2
}

















leerArchivo("datos.txt",listadeAlbunes);

class Inicio {
    constructor() {
    }


    main(listaAlbunes) {
        try {
            const respuesta =require("inquirer")
            respuesta
                .prompt([
                    {
                        type: "list",
                        name: "Opciones",
                        message: "Albunes \nSeleccione una opcion",
                        choices: ["listar albunes", "añadir albun", "eliminar albun", "modificar albun"]
                    }
                ])
                .then(respuesta=>{

                    if (respuesta.Opciones == "listar albunes") {
                        console.log(listaAlbunes.listarAlbunes())
                        listaAlbunes.seleccionarAlbun().then(aux=>{

                            listaAlbunes.seleccionarOpcion(aux).then(opcion =>{


                                if(opcion[1]=="añadir cancion"){
                                    listaAlbunes.añadircancion(opcion)
                                        .then(aux10=> {
                                            escribirArchivo("datos.txt",listaAlbunes)
                                        })
                                        .then(aux10=>{
                                            leerArchivo("datos.txt",listaAlbunes)
                                        })
                                        .then(aux10=>{
                                            inicio.main(listadeAlbunes)
                                        })
                                }
                                else if (opcion[1]=="eliminar cancion"){

                                    listaAlbunes.eliminarcancion(opcion)
                                        .then(aux10=> {
                                            escribirArchivo("datos.txt",listaAlbunes)
                                        })
                                        .then(aux10=>{
                                            leerArchivo("datos.txt",listaAlbunes)
                                        })
                                        .then(aux10=>{
                                            inicio.main(listadeAlbunes)
                                        })
                                }
                                else if (opcion[1]=="modificar cancion"){
                                    listaAlbunes.modificarCancion(opcion).then(opc=>{
                                        listaAlbunes.modificarCancion2(opc)
                                            .then(aux10=> {
                                                escribirArchivo("datos.txt",listaAlbunes)
                                            })
                                            .then(aux10=>{
                                                leerArchivo("datos.txt",listaAlbunes)
                                            })
                                            .then(aux10=>{
                                                inicio.main(listadeAlbunes)
                                            })
                                    })
                                }


                            })
                        })
                        //icio.main(listadeAlbunes)



                    } else if (respuesta.Opciones == "añadir albun") {
                        listaAlbunes.aniadirAlbun()
                            .then(aux10=> {
                                escribirArchivo("datos.txt",listaAlbunes)
                            })
                            .then(aux10=>{
                                leerArchivo("datos.txt",listaAlbunes)
                            })
                            .then(aux10=>{
                                inicio.main(listadeAlbunes)
                            })
                    } else if (respuesta.Opciones == "eliminar albun") {
                        const lista = listaAlbunes.listarAlbunes()

                        listaAlbunes.eliminarAlbun(lista)
                            .then(aux10=> {
                                escribirArchivo("datos.txt",listaAlbunes)
                            })
                            .then(aux10=>{
                                leerArchivo("datos.txt",listaAlbunes)
                            })
                            .then(aux10=>{
                                inicio.main(listadeAlbunes)
                            })
                    } else if (respuesta.Opciones == "modificar albun") {
                        const lista = listaAlbunes.listarAlbunes()
                        listaAlbunes.modificarAbun(lista)
                            .then(a=>{
                                listaAlbunes.modificarAbun2(a)
                                    .then(aux10=> {
                                        escribirArchivo("datos.txt",listaAlbunes)
                                    })
                                    .then(aux10=>{
                                        leerArchivo("datos.txt",listaAlbunes)
                                    })
                                    .then(aux10=>{
                                        inicio.main(listadeAlbunes)
                                    })
                            })


                    }
                })


        } catch (e) {
            console.log(e)
        }
    }
}







/*listadeAlbunes.lista.forEach(function (a,b){
    console.log(a)
    console.log(a.canciones)
})
*/

inicio = new Inicio()
inicio.main(listadeAlbunes)


