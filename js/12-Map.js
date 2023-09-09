//Map: es un método que crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//Mutables e inmutables: los métodos mutables modifican el array original, mientras que los inmutables devuelven un nuevo array modificado.

//Ejemplo 1

const numeros = [1, 2, 3, 4, 5];

const numerosDobles = numeros.map((numero) => {
    
    return numero * 2;
});

console.log(numerosDobles);