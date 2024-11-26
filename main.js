
// -------------- 1. Calcular el área de un rectángulo -------------- 
function calcularArea() {
    const largo = document.getElementById('largo').value;
    const ancho = document.getElementById('ancho').value;
    const area = largo*ancho; 
    console.log(area); 
}
// -------------- 2. Contar palabras en una cadena -------------- 
function contarPalabras() {
    const texto = document.getElementById('texto').value;
    const palabras = texto.split(" ").filter(palabra => palabra !== "");
    console.log("El texto tiene", palabras.length, "palabras.");
}

// -------------- 3. Invertir una cadena -------------- 
function invertirCadena() {
    const cadena = document.getElementById('invertir').value;
    const caracteres = cadena.split('');
    const caracteresInvertidos = caracteres.reverse();
    const cadenaInvertida = caracteresInvertidos.join('');
    console.log(cadenaInvertida);
}

// -------------- 4. Encontrar el palíndromo -------------- 
function esPalindromo() {
    const cadenaProcesada = document.getElementById('palindromo').value.toLowerCase();
    const cadenaInvertida = cadenaProcesada.split('').reverse().join('');
    console.log(cadenaProcesada === cadenaInvertida);
  }

// -------------- 5. Crear un programa para convertir la edad de un perro a años humanos -------------- 
function edadHumana() {
    const edad = document.getElementById('edad').value*7;
    console.log(`El perro tiene ${edad} años humanos`);
}