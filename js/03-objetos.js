//---->Objectos: Son estructuras de datos que representan propiedades, valores y acciones que puede realizar el objeto.

// let nombre = 'Juan';
// let edad = 30;
// let altura = 1.80;

// console.log(nombre, edad, altura);

// let nombre2 = 'Maria';
// let edad2 = 25;
// let altura2 = 1.60;

// console.log(nombre2, edad2, altura2);

//Para evitar repetir código, podemos utilizar un objeto para representar a una persona.


// let persona = {
//     nombre: 'Juan Hernadez',
//     edad: 35,
//     altura: 1.80
// };

// console.table(persona);
//---->agregar una propiedad al objeto
// persona.peso = 175;
// console.table(persona);

//---->solo imprimir una propiedad del objeto
// console.log(persona.nombre);
// console.log(persona.edad)



//---->destructuring: es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

// const { nombre, edad, altura,peso } = persona;
// console.log(nombre, edad, altura,peso);



//---->Objeto dentro de otro objeto

// const persona = { //objeto padre
//     nombre: 'Juan Hernadez',
//     edad: 35,
//     altura: 1.80,
//     peso: 175,
//     direccion: { //objeto hijo
//         ciudad: 'Guatemala',
//         zona: 10,
//         avenida: 'Reforma'
//     }
// };

//---->acceder a una propiedad del objeto hijo

// console.log(persona.direccion.ciudad);

// //---->destructuring de un objeto hijo
// const { nombre, edad, altura, peso, direccion: { avenida } } = persona;

// // const { ciudad } = persona.direccion;
// // console.log(ciudad);

// console.log( avenida);


//---->Objetos literales Enhacement: es una nueva forma de crear objetos literales en JavaScript, en la que no es necesario escribir el nombre de la propiedad si esta se encuentra en una variable.

// const banda = 'Metallica';
// const genero = 'Heavy Metal';
// const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// const nuevoObjeto = { 
//     banda, 
//     genero, 
//     canciones 
// };



//  console.log(nuevoObjeto);

//freeze: Congela el objeto para que no se pueda modificar
//Object.freeze(nuevoObjeto);
// nuevoObjeto.ubicacion = 'Los Angeles';
// console.log(nuevoObjeto);

//seal: Permite modificar las propiedades existentes pero no agregar nuevas
// nuevoObjeto.banda = 'Megadeth IIII';
// console.log(nuevoObjeto);
// Object.seal(nuevoObjeto);
// nuevoObjeto.genero = 'Megadeth IIII';
// console.log(nuevoObjeto);

//Eliminar una propiedad de un objeto
// delete nuevoObjeto.canciones;
// console.log(nuevoObjeto);

// buscar una cancion en el objeto 

// const indiceCancion = nuevoObjeto.canciones.indexOf('Master of Puppets');
// console.log(indiceCancion);



// // Eliminar una canción específica en el arreglo de canciones
// const cacionEliminar = 'Seek & Destroy2';
// const indiceCancion = nuevoObjeto.canciones.indexOf(cacionEliminar);

// if(indiceCancion!== -1){
//     nuevoObjeto.canciones.splice(indiceCancion,1);
// }

// console.log(nuevoObjeto);


//Desestructuración de objetos de 2 o mas objetos

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

const cliente = {
    nombre: 'Marcos',
    apellido: 'Escobar',
    nacimiento: 1986,
    pais: 'Guatemala',
}

// const { nombre, precio,disponible } = producto;
// const { nombre:nombreCliente, apellido, nacimiento, pais } = cliente;


// console.log(nombre, precio,disponible);
// console.log(nombreCliente, apellido, nacimiento, pais);


//----> unir 2 objetos en uno solo

//Spread Operator o Rest Operator: es una nueva forma de copiar objetos o arreglos en JavaScript. ventajas: 1. No se modifica el objeto original. 2. Se puede agregar nuevas propiedades al nuevo objeto.

// const resultado = { ...producto, ...cliente };
// console.log(resultado);


