//Tipo de datos 

//Undefined: es el valor asignado a una variable que no ha sido inicializada.
//ejemplo de undefined

let a;
console.log(a); //Output: undefined(no definido)

//Null: es el valor asignado a una variable que representa la ausencia intencional de un objeto.
//ejemplo de null
let b = null;
console.log(b); // Output: null

//Boolean: representa un valor lógico y puede tener dos valores: true o false.
//ejemplo de boolean

let c = true;
let d = false;
console.log(c, d); // Output: true false

//Number: representa un valor numérico y puede ser: entero (int) o decimal (double).

let e = 3;
let f = 3.14;

console.log(e);
console.log(f);

//String: representa una secuencia de caracteres y se utiliza para representar datos textuales.
//ejemplo de string

let saludo = 'Hello';
let saludo2 = "World";

console.log(saludo, saludo2);

//typeof: es un operador unario que se utiliza para obtener el tipo de un operando.
//ejemplo de typeof

let numero = 3;
console.log(typeof numero); // Output: number
console.log(typeof saludo); // Output: string


//Transformar de string a number

const n1 = '5';
const n2 = 10;

//concatenando el string '5' con el number 10 obtenemos el string '510'
console.log(n1 + n2); // Output: 510

//sumar el string '5' con el number 10 obtenemos el number 15
console.log(Number(n1) + n2); // Output: 15

//Symbol: es un tipo de dato cuyos valores son únicos e inmutables.

const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(primerSymbol === segundoSymbol); 

console.log(primerSymbol.valueOf()); // Output: Symbol(30)
console.log(segundoSymbol.valueOf()); // Output: Symbol(30)