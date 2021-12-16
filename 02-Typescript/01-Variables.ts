// 01-variables.ts

let nombre: string = "Juan"; //primitiva
let nombre2: String = "Juan2"; //Clase String
//nombre = 1;
nombre = "Carlos";
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo = 12.4;
//Duck Typing
let apellido = "Juan";//string
apellido = "Carlos" //igual a otros string
apellido.toUpperCase();//metodos string
let variable: null;
let variable2: undefined;
console.log(variable)
console.log(variable2)

let marihuna: any = 2;
marihuna = "2";
marihuna = true;
marihuna = ()=>'2';

let edadmultiple: number | string | Date = 2;
edadmultiple = "2";
edadmultiple = 2222;
edadmultiple = "dos";
edadmultiple = new Date();
//edadmultiple = true;