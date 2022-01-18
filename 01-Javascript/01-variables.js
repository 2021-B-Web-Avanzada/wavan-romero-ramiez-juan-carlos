// 01-javascript/
//              / 01-variables.js
// Mutables e Inmutables

// Mutables
/*
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;




// Inmutables
const configuracionArchivos = "PDF";


// configuracionArchivos = "XML";
// Vamos a preferir CONST > LET > NUNCA VAR!

// Tipos de variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Juan"; // string
const apellido = 'Romero'; // string
const booleanooo = false; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd")); // number
console.log(Number("asd")); // NaN



//Truty y Falsy
if(""){
    console.log("String vacío es un Truty");
} else {
    console.log("String vacío es un Falsy")
}
if("Juan"){
    console.log("String lleno es un Truty");
} else {
    console.log("String lleno es un Falsy")
}
// Truty y Falsy en Números
if(-1){
    console.log("Negativo es un Truty");
} else {
    console.log("Negativo es un Falsy")
}
if(0){
    console.log("Cero es un Truty");
} else {
    console.log("Cero es un Falsy")
}
if(1){
    console.log("Positivo es un Truty");
} else {
    console.log("Positivo es un Falsy")
}
//Undefined y Null
if(null){
    console.log("Null es un Truty");
} else {
    console.log("Null es un Falsy")
}
if(undefined){
    console.log("Undefined es un Truty");
} else {
    console.log("Undefined es un Falsy")
}

 */
//Objetos JS (JSON) - Arreglos
const juan = {
    nombre: "Juan",
    apellido: "Romero",
    edad: 21,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: "gris",
        talla: "40",
    },
    mascotas: ["zeus","hachi"]
}


////Acceder a las propiedades del objeto
juan.nombre;
juan.apellido;
juan["nombre"];
console.log(juan);
juan.nombre = "Carlos";
console.log(juan);
juan["nombre"] = "Juan Carlos";
juan.sueldo;
console.log(juan.sueldo);
juan.sueldo = 3.8;
console.log(juan.sueldo);
juan["gastos"] = 0.8;
console.log(juan.gastos);
juan.nombre = undefined;
console.log(juan);
console.log(Object.keys(juan));
console.log(Object.values(juan));
delete juan.nombre; //Eliminar la llave nombre
console.log(juan);
//Variables por valor o referencia
//Variables por valor en JS son las primitivas, estas son: number, string, boolean
let edad1 = 22;
let edad2 = edad1; //Guardamos una primitiva  en otra variable
                              //Variables por valor
console.log(edad1);    //22
console.log(edad2); //22
edad1 = edad2 + 1;
console.log(edad1);    //23
console.log(edad2); //22
// //Variables por referencia: Objects ([], {}) - (Arreglos o JSON)
// let bruno = {
//     nombre : "Bruno"
// };
// let miguel = bruno;
// console.log(bruno);
// console.log(miguel);
// miguel.nombre = "Miguel";
// console.log(bruno);
// console.log(miguel);
// delete bruno.nombre;
// console.log(bruno);
// console.log(miguel);

//
// Para clonar un objeto
let bruno = {
    nombre : "Bruno"
};

let miguel = Object.assign({}, bruno);
console.log(bruno);
console.log(miguel);
miguel.nombre = "Miguel";
delete bruno.nombre;
console.log(bruno);
console.log(miguel);

//Para los arreglos
let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([],arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloNumeros);
console.log(arregloClonado);
