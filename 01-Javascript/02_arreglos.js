let arreglo = [6,7,8,9,10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true,1,1.1,"Juan","Romero",undefined,null,{},[1,2]];
arreglo = [6, 7, 8, 9, 10];

//for of
for (let numero of arreglo){ //VALORES
    console.log('numero', numero);
}

//for in //INDICES
for (let indice in arreglo){ //INDICES
    arreglo[indice];
    console.log('indice', indice);

}
let objetoPrueba = {a:'1',b:'2', c:'3'};
for (let llave in objetoPrueba){
    console.log('llave', llave)
}

console.log(arreglo);
arreglo.push(11); //añadir al final un elemento [6,7,8,9,10,11]
console.log(arreglo);
arreglo.pop(); //eliminar al final un elemento [6,7,8,9,10]
console.log(arreglo);
arreglo.unshift(5); //añadir al principio del arreglo [5,6,7,8,9,10]
console.log(arreglo);

//agregar en el indice 0
//splice (indice, numero de lementos eliminados, ... items a agregar)
//[4,5,6,7,8,9,10]
arreglo.splice(0,0,4);
console.log(arreglo);
const indiceNueve = arreglo.indexOf(9); //encuentra el primer elemento y devuelve el indice
arreglo.splice(indiceNueve,2);
//[4,5,6,7,8]
console.log(arreglo);