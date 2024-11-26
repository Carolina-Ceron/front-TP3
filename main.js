
/* -------------- 1. Calcular el área de un rectángulo -------------- 
-recibir medidas por input
-crear una variable para guardar el resultado
-realizar la formula de area
-imprimir por consola el resultado
*/
function calcularArea() {
    const largo = document.getElementById('largo').value;
    const ancho = document.getElementById('ancho').value;
    const area = largo*ancho; 
    console.log(area); 
}

/* -------------- 2. Contar palabras en una cadena -------------- 
-recibir la cadena por input
-crear una variable para guardar las palabras contadas
-separar las palabras filtrando los espacios en blanco
-imprimir por consola el resultado de la variable creada
*/
function contarPalabras() {
    const texto = document.getElementById('texto').value;
    const palabras = texto.split(" ").filter(palabra => palabra !== "");
    console.log("El texto tiene", palabras.length, "palabras.");
}

/* -------------- 3. Invertir una cadena -------------- 
-recibir la cadena por input
-crear una variable para guardar los caracteres separados
-separar los caracteres
-crear una variable para guardar los caracteres invertidos
-invertir los caracteres
-crear una variable para unificar los caracteres invertidos
-mostrar por consola la cadena de caracteres invertidos
*/
function invertirCadena() {
    const cadena = document.getElementById('invertir').value;
    const caracteres = cadena.split('');
    const caracteresInvertidos = caracteres.reverse();
    const cadenaInvertida = caracteresInvertidos.join('');
    console.log(cadenaInvertida);
}

/* -------------- 4. Encontrar el palíndromo -------------- 
-recibir la cadena por input y pasarla a minuscula
-crear una variable para guardar la cadena invertida
-separar los caracteres, invertirlos y unirlos
-mostrar por consola el resultado de la comparacion entre la cadena recibida y la cadena invertida
*/
function esPalindromo() {
    const cadenaProcesada = document.getElementById('palindromo').value.toLowerCase();
    const cadenaInvertida = cadenaProcesada.split('').reverse().join('');
    console.log(cadenaProcesada === cadenaInvertida);
  }

/* -------------- 5. Crear un programa para convertir la edad de un perro a años humanos --------------
-recibir el numero por input
-mostrar por consola el resultado de el numero recibido multiplicado por 7
*/
function edadHumana() {
    const edad = document.getElementById('edad').value*7;
    console.log(`El perro tiene ${edad} años humanos`);
}