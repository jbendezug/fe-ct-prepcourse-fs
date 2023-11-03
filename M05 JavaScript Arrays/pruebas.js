//  Ordenar un arreglo: Escribe una función que tome un arreglo de números y lo ordene de menor a mayor.

// function ordenarArreglo (array){

//     array.sort((a,b) => a-b);
//     return array;
// }
// const numeros = [4, 2, 5, 1, 3];
// const numerosOrdenados = ordenarArreglo(numeros);
// console.log(numerosOrdenados);

// Eliminar duplicados: Crea una función que reciba un arreglo y elimine los elementos duplicados, devolviendo un nuevo arreglo sin duplicados.

// Contar vocales: Haz una función que cuente la cantidad de vocales (a, e, i, o, u) en una cadena de texto.

// Factorial: Escribe una función que calcule el factorial de un número. El factorial de un número entero n es el producto de todos los enteros positivos desde 1 hasta n.

// Palíndromo: Desarrolla una función que determine si una cadena de texto es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha y viceversa (ignorando espacios, signos de puntuación y mayúsculas/minúsculas).

// Números primos: Crea una función que verifique si un número es primo o no. Un número primo es aquel que solo es divisible por sí mismo y por 1.

// Revertir una cadena: Desarrolla una función que invierta una cadena de texto. Por ejemplo, si se le pasa "Hola", debe devolver "aloH".

// Suma de números pares: Escribe una función que tome un número entero positivo como argumento y sume todos los números pares desde 1 hasta ese número.

// Encontrar el segundo número más grande: Crea una función que encuentre el segundo número más grande en un arreglo de números.

// Contar palabras en una cadena: Desarrolla una función que cuente la cantidad de palabras en una cadena de texto. Puedes asumir que las palabras están separadas por espacios.

var numeros = [5, 6, 4, 7, 2, 1];

console.log("Este es un arreglo de números: "+ numeros);
console.log(numeros[0]);
numeros.push(102);
console.log("Este es un arreglo de números: "+ numeros);
var elementoEliminado = numeros.pop();
console.log(elementoEliminado) 
numeros.unshift(2,8,"2");
console.log("Este es un arreglo de números: "+ numeros);
var cantidadDeelemntos = numeros.length;
console.log(cantidadDeelemntos);
elementoDelete = numeros.shift();
console.log(elementoDelete);