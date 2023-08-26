//Condicionales: if, else, else if, switch
//Operadores de comparación: ==, ===, !=, !==, >, <, >=, <=
//Operadores lógicos: &&, ||, !
//Ejemplo 1
// let edad = 19;

// if (edad === 18) {
//     console.log("Puedes votar, será tu primera votación");
// } else if (edad > 18) {
//     console.log("Puedes votar de nuevo");
// }

// //Ejemplo 2
// //comprobar si tengo efectivo disponible

// let efectivo = 500;
// let totalCarrito = 3000;
// let tarjeta = false;

// if (efectivo > totalCarrito) {
//     console.log("Pago correcto");
// }
// else if (tarjeta) {
//     console.log("Pago con tarjeta");
// }
// else {
//     console.log("Fondos insuficientes");
// }


// //Ejemplo 3 - Switch
// // nota 0-5: malo
// // nota 6-7: regular
// // nota 8-9: bueno
// // nota 10: excelente

// let nota = 10;

// switch (nota) {
//     case 10:
//         console.log("Excelente");
//         break;
//     case 8:
//     case 9:
//         console.log("Muy bien");
//         break;
//     case 6:
//     case 7:
//         console.log("Regular");
//         break;
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Malo");
//         break;
//     default:
//         console.log("Nota no válida");
//         break;
// }

// //Operadores de comparación: ==, ===,

// let a = 5;  //number
// let b = "5"; //string

// console.log(typeof a); //number
// console.log(typeof b); //string

// console.log(a == b); //true no es estricto

// console.log(a === b); //false es estricto

// //funcion cohersion de tipo
// console.log(a === Number(b)); //true

// console.log(a === b); //false es estricto



let usuario = "pepe2017";
let password = "12345";

if (usuario === "pepe2017" && password === "12345") {
    console.log("Login correcto");
}
else {
    console.log("Usuario o contraseña incorrectos");
}


//Ejemplo con or || notas del 0 al 10

let nota2 = -149.8;

if (nota2 < 0 || nota2 > 10) {
    console.log("Nota no válida");
}
else if (nota2 >= 9) {
    console.log("Sobresaliente");
}
else if (nota2 >= 7) {
    console.log("Notable");
}
else if (nota2 >= 6) {
    console.log("Bien");
}
else if (nota2 >= 5) {
    console.log("Suficiente");
}
else {
    console.log("Insuficiente");
}

//Condicionales ternarios

let numero = 9;

(numero % 2 == 0) ? console.log("Es par") : console.log("Es impar");

//Condicionales ternarios anidados positivo, negativo o cero

let numero2 =0;

(numero2 > 0) ? 
    console.log("Positivo") : 
        (numero2 < 0) ?
            console.log("Negativo") :
            console.log("Cero");