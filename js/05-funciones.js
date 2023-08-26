//Funciones: Bloque de código que se ejecuta cuando es invocado
//Funciones declarativas: es una función que tiene un nombre en concreto

saluda(); //Joistick: es una función que se ejecuta antes de que se lea el código de arriba hacia abajo

function saluda() {
    console.log('Hola Estudiante');
}


//Funcion anonima: es una función que no tiene nombre y se almacena en una variable y se invoca a través de la variable que la contiene
//Funciones de expresión: es una función que no tiene nombre y se almacena en una variable y se invoca a través de la variable que la contiene
let mensaje = function() {
    return 'Hola soy una función de expresión';
}

console.log(mensaje());

//Funciones con parámetros: es una función que recibe parámetros y se pueden enviar valores por defecto

function suma(a, b) {
    return a + b;
}

console.log(suma(5, 6));

//arrow functions: es una función que se almacena en una variable y se invoca a través de la variable que la contiene

let calcularAreaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

//formar 1 de invocar una función
let resultado = calcularAreaTriangulo(10, 5);
console.log(resultado);

//formar 2 de invocar una función
console.log(calcularAreaTriangulo(3, 5));


//calcular areas de poligonos segun su lados y tipo de poligono
//lado: 3, tipo: triangulo,   ========>  area: (lados * lados) / 2
//lado: 4, tipo: cuadrado,    ========>  area: lados * lados
//lado: 5, tipo: pentagono,   ========>  area: (lados * lados) * 1.720477400588967

let calcularArea = (lados, tipo) => {
    let area;
    switch (tipo) {
        case 'triangulo':
            area = (lados * lados) / 2;
            break;
        case 'cuadrado':
            area = lados * lados;
            break;
        case 'pentagono':
            area = (lados * lados) * 1.720477400588967;
            break;
        default:
            area = 'No se puede calcular el area porque no se conoce el tipo de poligono';
            break;
    }
    return area;
}

console.log(calcularArea(5, 'pentagono'));


//Teorema de pitagoras calcula la hipotenusa de un triangulo rectangulo

let calcularHipotenusa = (cateto1, cateto2) => {
    let hipotenusa = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2));
    return hipotenusa
}

console.log(calcularHipotenusa(3, 4));