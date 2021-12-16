// 08-promesas.js


function promesaEsPar(numero){
    const miPrimeraPromesa = new Promise( // Definicion de la promesa
        (resolve, reject)=>{
            if(numero % 2 == 0){
                resolve(numero);
            }
            else {
                reject("No es par =(")
            }
        }
    )
    return miPrimeraPromesa
}

function promesaElevarAlCuadrado(numero){
    const miPrimerpromesa = new Promise( //definicion de la promesa
    (resolve, reject)=>{
        const numeroElevadoAlCuadrado = Math.pow(numero, 2);
        resolve(numeroElevadoAlCuadrado)
    }
    );
    return miPrimerpromesa
}


promesaEsPar(5)
    .then(
        (datosPromesas)=>{
            console.log(datosPromesas);
        }
    )
    .catch(
        (error)=>{
            console.log(error)
        }
    )
    .finally()