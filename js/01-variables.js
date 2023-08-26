//Var: es la forma más antigua de declarar variables en JavaScript. Las variables declaradas con var tienen un alcance de función (function scope) o alcance global si se declaran fuera de cualquier función. 

// var x = 10;

// if(true){
//     var x = 20;
//     console.log(x);
// }

// console.log(x);

//let fue introducido en ECMAScript 6 (ES6) y tiene un alcance de bloque (block scope). Las variables declaradas con let solo están disponibles dentro del bloque en el que se definen.
//Además, a diferencia de var, las variables declaradas con let no son afectadas por el comportamiento de elevación y no pueden ser redeclaradas en el mismo alcance.

// let y = 10;

// if(true){
//     let y = 20;
//     console.log(y);
// }
// y=30;
// console.log(y);

//const también fue introducido en ES6 y tiene un alcance de bloque al igual que let. Sin embargo, a diferencia de let y var, las variables declaradas con const no pueden ser reasignadas después de su inicialización.

// const z = 10;

// if(true){
//     const z = 20;
//     console.log(z);
// }

// // z=30; // no se puede reasignar porque es una constante
// console.log(z);

