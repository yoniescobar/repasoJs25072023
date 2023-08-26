// //scope: alcance de las variables 
// //ejemplo 1

// const precio = 20;

// function mostrarPrecio() {
//     const precio = 10;
//     console.log(precio);
// }

// console.log(precio);
// mostrarPrecio();

// //ejemplo 2
// //Scope Global: variables declaradas fuera de una funcion

// const globalVariable = 'Soy global';

// function exampleFunction() {
//     console.log(globalVariable); // Acceso a la variable global
// }

// exampleFunction();

// //ejemplo 3
// //Scope Local: variables declaradas dentro de una funcion

// function exampleFunction() {
//     const localVariable = 'Soy local';
//     console.log(localVariable); // Acceso a la variable local
// }


// console.log(localVariable); // Error: localVariable is not defined


//En JavaScript, el scope funciona de manera jerárquica, lo que significa que una variable declarada en un scope más interno puede "ocultar" una variable con el mismo nombre en un scope más externo. 