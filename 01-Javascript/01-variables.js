// 01-javascript/
//              / 01-variables.js
// Mutables e Inmutables

// Mutables
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
const texto = "Adrian"; // string
const apellido = 'Eguez'; // string
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
console.log(Number("qw"))
