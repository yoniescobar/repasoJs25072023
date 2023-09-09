const web = {
    nombre: 'Amazon',
    links: {
        enlace: 'www.amazon.com'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/amazon',
            nombre: 'Amazon Youtube'
        },
        facebook: {
            enlace: 'facebook.com/amazon',
            nombre: 'Amazon Facebook'
        }
    }
}


console.log(web.redesSociales.youtube.nombre);  // Amazon Youtube

// Destructuring

const { enlace, nombre } = web.redesSociales.youtube;

console.log(enlace);  // youtube.com/amazon
console.log(nombre);  // Amazon Youtube