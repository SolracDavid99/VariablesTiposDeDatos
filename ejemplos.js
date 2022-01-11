// var length = 16;

// var lastName = "Johnson"

// var x = {fistname: "John" , lastName : "Doe"};

// var computadora = {marca: "asus", procesador: "i9", memoria: "16 gb", grafica: "GTX2060" , nucleos: 8};

// console.log("El tipo de dato de 16 es " + typeof(length));

// console.log("El tipo de dato de Johnson es " + typeof(lastName));

// console.log("El tipo de dato de John Doe es " + typeof(x));

// console.log("El tipo de dato de Computadora es " + typeof(computadoras));

// console.log("La maraca de la computadora es: " + computadora.grafica);

// console.log("El tipo de dato de 8 es " + typeof(computadora.nucleos));

// var x = 4 + 3 + "volvo" + 2 + 3;

// console.log(x);

// var y =  "volvo" + 4 + 3 ;

// console.log(y);

// var nombre = "Guillermo";
// var apellido = 'Chang';
// var otroApellido = `Gordillo`;

// console.log(nombre);
// console.log(apellido);
// console.log(otroApellido);

// var x = 34;
// var y = 34.49;

// var x = 34;
// var y = 34.49;

// console.log(x);
// console.log(y);

// var pan = ["cuernito", "piedra", "polvoron"];

// console.log(pan[1]);

// var auto = {
//             marca: "Ford", 
//             cilindros: 8, 
//             transmision: "automatica",
//             tapiz: {
//                     color: "beige",
//                     textura: "fibrosa",
//                     material: "sintetico"
//                 }
//             };

// console.log(auto.tapiz.color);

// var x = 34;

// var y = String(234+123);

// console.log(typeof(x));

// console.log(y);

// console.log(typeof(y));

// var x = 34;

// y = x.toString();

// console.log(typeof(x));

// console.log(y);

// console.log(typeof(y));

/*


//Metodos numericos y propiedades
var x = 13.54864984566541654654

// var y = x.toExponential(4); 
// var y = x.toFixed(4);
var y = x.toPrecision(4);

console.log(y);
*/


//Conversion a valor
/*
var y = (100+23).valueOf();

console.log(typeof(y));
*/

//Conversion de variables a numeros
/*
var x = "Jhon";
var y = Number(x); //Retorna un numero

console.log(x);
console.log(typeof(x));

console.log(y);
console.log(typeof(y));
*/

//Metodo parseInt
/*
var x = "10 20 30";

var y = parseInt(x);

console.log(x);
console.log(typeof(x));

console.log(y);
console.log(typeof(y))
*/

//Metodo parseFloat
/*
var x = "10.52";

var y = parseFloat(x);

console.log(x);
console.log(typeof(x));

console.log(y);
console.log(typeof(y));
*/

//Propiedades numericas
/*
var x = Number.MAX_VALUE;  //Numero mas grande permitido en JS
var y = Number.MIN_VALUE;  //Numero mas pequeno permitido en JS
var w = Number.POSITIVE_INFINITY; //Infinito positivo
var e = Number.NEGATIVE_INFINITY; //Infinito negativo

console.log(x);
console.log(y);
console.log(w);
console.log(e);
*/

//Conversion de valores booleanos en cadenas
/*
var x = String(false);

console.log(x);
console.log(typeof(x));
*/

//Unario + Operador
/*
var x = "Susana";

console.log(x);
console.log(typeof(x));

var y = "Barajas " + x;
console.log(y);
console.log(typeof(y))
*/

//Conversion automatica de tipos
/*
var resultado = "John" - 'Omar';
var resultado = "5" - 3;
var resultado = "5" + 7;
var resultado = "Omar" + 7;

console.log(resultado);
console.log(typeof(resultado));
*/

//Conversion automatica 

var myvar = [1,2,3,4];

console.log(myvar);
console.log(typeof(myvar));

var cadenita = myvar.toString();

console.log(cadenita);
console.log(typeof(cadenita));

