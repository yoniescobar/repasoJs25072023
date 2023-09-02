// const nuevoElemento = document.querySelector('ul');
// const nuevoLi = document.createElement('li'); /* Crear un nuevo elemento */
// nuevoLi.textContent = 'Pescado'; /* Agregar contenido al nuevo elemento */
// nuevoElemento.appendChild(nuevoLi); /* Agregar el nuevo elemento al final de la lista */








// // Agregar elemento con un array

// const coleccionAnimales = document.querySelector('ul');
// const animales = ['Perro', 'Gato', 'Conejo', 'Pez', 'Loro'];

// animales.forEach(animal => {
//     const nuevoLi = document.createElement('li');
//     nuevoLi.textContent = animal;
//     coleccionAnimales.appendChild(nuevoLi);
// });





// /* AddEventListener: es un metodo que se encarga de escuchar un evento y ejecutar una funcion */
// const parrafo = document.querySelector('p');

// parrafo.addEventListener('click', () => {
//     console.log('Me diste un click');
//     parrafo.style.color = 'red';
// });






// /* Evento de teclado */
// const salida = document.querySelector('#salida');
// const boton = document.querySelector('#boton');

// let contador = 0;

// boton.addEventListener('click', () => {
//     console.log('Me diste un click');
//     contador++;
//     salida.textContent = contador;
// });



// //Eventos change: se ejecuta cuando el valor de un input cambia y se sale del input

// const salida = document.querySelector('.salidaTexto');

// const input = document.querySelector('input');

// input.addEventListener('change', (e) => {
//     console.log(e.target.value); // e.target.value: es el valor del input que se esta cambiando
//     salida.textContent = e.target.value;
// });



//Eventos moussenter: se ejecuta cuando el mouse entra en el elemento


const bloque = document.querySelector('.bloque');
const pbloque = document.querySelector('.pbloque');


bloque.addEventListener('mouseenter', () => {
    console.log('Entraste al bloque');
    bloque.style.background = 'blue';
    pbloque.innerHTML = 'Entraste al bloque';

});

bloque.addEventListener('mouseleave', () => {
    bloque.style.background = 'red';
    pbloque.innerHTML = 'Saliste del bloque';
});