console.log(document.querySelector('h1')) /* Seleciona o primeiro elemento que encontrar */
console.log(document.querySelector('.botton')) /* Selecionando un elemento por clase */
console.log(document.querySelector('#titulo')) /* Selecionando un elemento por id */


// Cambiar el contenido de un elemento

document.querySelector('h1').innerHTML = 'Titulo cambiado desde JS'

const cambiarTitulo = document.querySelector('h1');
// cambiarTitulo.textContent = 'Titulo Intecap 2023 <i> esto es una prueba</i>' /* Cambiar el contenido de un elemento pero no agrega etiques html */
cambiarTitulo.innerHTML = 'Titulo cambiado desde JS Nuevamente  2023 <i> esto es una prueba</i>' /* Cambiar el contenido de un elemento y acepta etiques html */

//Agregar una nueva clase a un elemento

const cambiarClase = document.querySelector('#titulo'); // Seleccionar el elemento
cambiarClase.classList.add('titulo-modificado') /* Agregar una nueva clase a un elemento */
console.log(cambiarClase) /* Mostrar todas las clases que tiene un elemento */

//remover una clase a un elemento
cambiarClase.classList.remove('titulo-modificado') /* Remover una clase a un elemento */