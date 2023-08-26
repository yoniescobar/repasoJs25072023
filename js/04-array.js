// //Array: es una estructura de datos que nos permite almacenar varios valores y agruparlos en una sola variable.

// const arreglo = [10, 20, '20', 'js', true];
// console.log(arreglo);

// // //---->acceder a un elemento del arreglo
// // console.log(arreglo[3]); //js
// // console.log(arreglo[5]); // undefined
// // console.log(arreglo.length); // 5 (cantidad de elementos del arreglo)

// // //---->agregar un elemento al arreglo
// // arreglo.push('css');
// // console.log(arreglo);

// // //---->eliminar un elemento del arreglo
// // arreglo.pop();
// // console.log(arreglo);

// // //---->eliminar un elemento del array por su posición
// // arreglo.splice(3, 2);  // splice(posición, cantidad de elementos a eliminar)
// // console.log(arreglo);

// // desestructuración de un arreglo
// const [primero, segundo, tercero, cuarto, quinto] = arreglo;

// console.log( cuarto);

// //agregar elementos con spread operator forma recomendada

// const nuevoArreglo = [...arreglo, 'css', 'html'];

// console.log(nuevoArreglo);


//Filter: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. recomendado para react y redux

const marcaAutos = ['Toyota', 'Mazda', 'Chevrolet', 'Ford', 'Kia', 'Hyundai', 'Ferrari', 'Lamborghini', 'Porsche', 'Mercedes Benz'];

//Encontrar una maraca de auto que empiece con la letra M

 const marcasConM = marcaAutos.filter((marca) => {
     return marca.startsWith('M');
 }
    );

    console.log(marcasConM);

    //que retorne todos excepto 'Ford'

    const marcasSinFord = marcaAutos.filter((marca) => marca !== 'Ford');
    console.log(marcasSinFord);

    // que retorne solo Toyota y Mazda  

    const marcasToyotaMazda = marcaAutos.filter((marca) => marca === 'Toyota' || marca === 'Mazda');
    console.log(marcasToyotaMazda);


    //Map: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

    //itera todas las marcas 

    const todasLasMarcas = marcaAutos.map((marca) => marca.toUpperCase());
    console.table(todasLasMarcas);

    //Modificar una marca en específico y retornar el nuevo array con la modificación

    const marcaKia = marcaAutos.map((marca) => {
        if (marca === 'KiA') {
            return 'KIA MOTORS';
        } else {
            return marca;
        }
    }
    );

    console.log(marcaKia);



//forEach: ejecuta la función indicada una vez por cada elemento del array.

const animales = ['perro', 'gato', 'conejo', 'pez', 'tortuga', 'hamster', 'loro', 'gallina', 'caballo', 'cerdo'];

animales.forEach(function(animal) {
    console.log(animal);
});