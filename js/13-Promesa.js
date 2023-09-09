/* 
Promesa: es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una función.

// Si ganamos el curso de programación, compraremos una laptop nueva y si no, no compraremos nada.

//Partes de una promesa:
//1. Pending: estado inicial, no se ha cumplido ni rechazado
//2. Fulfilled: significa que la operación se completó satisfactoriamente.
//3. Rejected: significa que la operación falló.*/

   //Resolve: se ejecuta cuando la promesa se cumple exitosamente y recibe un argumento que es el resultado de la promesa
    //Reject: se ejecuta cuando la promesa no se cumple y recibe un argumento que es el error de la promesa

const miPromesa = new Promise((resolve, reject) => {
    //Simulando una opración asincrona con un temporizador
    setTimeout(() => {
        const exito = false;

        if(exito) {
            resolve('La operación se completó exitosamente');
        } else {
            reject('La operación no se completó');
        }
    }, 4000); //esta promesa se va a ejecutar en 4 segundos

    setTimeout(() => {
        console.log('Segunda ejecución');
    }, 3000);

});

//Para consumir una promesa se utiliza el método then y catch

miPromesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });
