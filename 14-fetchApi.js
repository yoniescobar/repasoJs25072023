//Fetch Api: es una interfaz que nos permite hacer peticiones http desde javascript de una manera mas sencilla
//Api: es un conjunto de funciones que nos permite comunicarnos con un software externo desde nuestro programa 
// una api es una interfaz de programación de aplicaciones que permite a los desarrolladores crear aplicaciones que se comuniquen con otros servicios

// https://pokeapi.co/
// https://pokeapi.co/api/v2/pokemon/

// fetch(' https://pokeapi.co/api/v2/pokemon/')
//     .then(res => res.json()) //significa que esperamos una respuesta y la convertimos a json
//     .then(data => {
//         console.log(data.results) //results es un array de objetos
//         data.results.forEach(element => {
//             console.log(element.name)
//         });
//     })
//     .catch(error => console.log(error))


    // https://jsonplaceholder.typicode.com/

    // Funciones asincronas Async Await utilizando fetch api

    async function obtenerPokemones(){
        try{
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const data = await res.json()
            console.log(data.results)
            data.results.forEach(element => {
                console.log(element.name)
            });
        }catch(error){
            console.log(error)
        }
    }

    async function obtenerUsuarios(){
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            console.log(data)
            data.forEach(element => {
                console.log(element.name)
            });
        }catch(error){
            console.log(error)
        }
    }

   //Promesas encadenadas

    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            data.results.forEach(element => {
                console.log(element.name)
            });
            return fetch('https://jsonplaceholder.typicode.com/users')
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(element => {
                console.log(element.name)
            });
        })
        .catch(error => console.log(error))
        