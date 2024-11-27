
/* -------------- 1. Calcular el área de un rectángulo -------------- 
-recibir medidas por input
-crear una variable para guardar el resultado
-realizar la formula de area
-imprimir por consola el resultado
*/
function ejercicio1() {
    const largo = document.getElementById('largo').value;
    const ancho = document.getElementById('ancho').value;
    const area = calcularArea(largo, ancho); 
    console.log("Ejercicio 1")
    console.log(area); 
    console.log("------------------------------------------------")
    console.log("") 
}
function calcularArea(base,altura){
    return `El area del rectangulo es ${base*altura}`;
}

console.log(`Ejercicio 1: ${calcularArea(3,5)}`);
console.log(`Ejercicio 1: ${calcularArea(4,5)}`);
console.log(`Ejercicio 1: ${calcularArea(5,5)}`);
console.log("------------------------------------------------")
console.log("")

/* -------------- 2. Contar palabras en una cadena -------------- 
-recibir la cadena por input
-crear una variable para guardar las palabras contadas
-separar las palabras filtrando los espacios en blanco
-imprimir por consola el resultado de la variable creada
*/
function ejercicio2() {
    const texto = document.getElementById('texto').value;
    console.log(contarPalabras(texto));
    console.log("------------------------------------------------")
    console.log("") 
}

function contarPalabras(texto) {
    const palabras = texto.split(" ").filter(palabra => palabra !== "");
    return `Ejercicio 2: El texto ${texto} tiene ${palabras.length} palabras`
}

console.log(`${contarPalabras("asd asd asd")}`);
console.log(`${contarPalabras("asd asdv")}`);
console.log(`${contarPalabras("asd rdvdrb fdsfvs asdv")}`);
console.log("------------------------------------------------")
console.log("")

/* -------------- 3. Invertir una cadena -------------- 
-recibir la cadena por input
-crear una variable para guardar los caracteres separados
-separar los caracteres
-crear una variable para guardar los caracteres invertidos
-invertir los caracteres
-crear una variable para unificar los caracteres invertidos
-mostrar por consola la cadena de caracteres invertidos
*/
function ejercicio3() {
    const cadena = document.getElementById('invertir').value;
    console.log(invertirCadena(cadena));
    console.log("------------------------------------------------")
    console.log("") 
}

function invertirCadena(cadena) {
    const caracteres = cadena.split('');
    const caracteresInvertidos = caracteres.reverse();
    const cadenaInvertida = caracteresInvertidos.join('');
    return `Ejercicio 3: El texto ${cadena} invertido es ${cadenaInvertida}`
}

console.log(invertirCadena("asd dasd"));
console.log(invertirCadena("asd sad  dasd"));
console.log(invertirCadena("asd  hgtfdhfgh ht htfghbfg dasd"));
console.log("------------------------------------------------")
console.log("")

/* -------------- 4. Encontrar el palíndromo -------------- 
-recibir la cadena por input y pasarla a minuscula
-crear una variable para guardar la cadena invertida
-separar los caracteres, invertirlos y unirlos
-mostrar por consola el resultado de la comparacion entre la cadena recibida y la cadena invertida
*/
  function ejercicio4() {
    const cadenaProcesada = document.getElementById('palindromo').value;
    console.log(esPalindromo(cadenaProcesada));
    console.log("------------------------------------------------")
    console.log("") 
  }

function esPalindromo(cadenaProcesada) {

    const cadenaLimpia = cadenaProcesada.toLowerCase().split('').filter(palabra => palabra !== " ");
    return `Ejercicio 4: El texto ${cadenaProcesada} ${cadenaLimpia.join('') === cadenaLimpia.reverse().join('') ? "es" : "no es"} palindromo`
}

console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Anita no lava la tina"));
console.log(esPalindromo("Anita lavaba la tina"));
console.log("------------------------------------------------")
console.log("")

/* -------------- 5. Crear un programa para convertir la edad de un perro a años humanos --------------
-recibir el numero por prompt
-mostrar por consola el resultado de el numero recibido multiplicado por 7
*/

function edadHumana() {
    const edad = prompt("Ingresa la edad del perro: ");
    if (edad == Number(edad)){
        console.log(`Ejercicio 5: El perro tiene ${edad*7} años humanos`);
    }else {
        console.log("Ingresa un numero, maestro");
    }
    console.log("------------------------------------------------")
    console.log("")        
}
