//03-funciones.ts
function sumarNumeros(
    numeroInicial: number,
    ...numerosInfinitos: number[]
): number{
    return numeroInicial;
}
//sumarNumeros("asd","asd") //Otros tipos de datos no permitidos
sumarNumeros(1,1,2,3,4,5)

function imprimr(mensaje:string):void{
    console.log("Hola "+mensaje);
}
const arregloNumeros: number[]=[1,2];
const  arregloNumerosDos: Array<number> =[1,2];
const arregloNumerosTres: Array<number | string | boolean > =[1,'dos',true];
const arregloNumerosCuatro: (number | string | boolean)[] =[1,'dos',true];
let arregloNumerosCinco: number[] | string[]=[1,2];
arregloNumerosCinco=['uno','dos']
