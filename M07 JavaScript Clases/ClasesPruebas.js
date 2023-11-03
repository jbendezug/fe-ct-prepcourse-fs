// //Función Constructora
// function Auto (puertas, color, marca, anio, ruedas){
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.anio = anio;
//     this.ruedas = ruedas;
// }
// let miPrimerAuto = new Auto(4, 'blanco', 'toyota', 2003, 4);
// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);

//EXPRESION DE CLASE
// class Auto {
//     constructor(puertas, color, marca, año, ruedas){
//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedas = ruedas;

//     }
// }

// let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
// console.log(miSegundoAuto);
// console.log(miSegundoAuto.marca);

// Array.prototype.mayorQueTres = function () {
//     var arregloModificado = [];
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] > 3) {
//             arregloModificado.push(false);
//         }else{
//             arregloModificado.push(this[i]);
//         }
//     }
//     return arregloModificado;
// };

// var arreglo = [1, 2, 3, 4, 5];
// var nuevoArreglo = arreglo.mayorQueTres();
// console.log(nuevoArreglo);


// function Persona(nombre,edad){
//     this.nombre = nombre;
//     this.edad = edad;
// }

// Persona.prototype.saludar = function(){
//     console.log("Hola, mi nombre es " + this.nombre);
// }

// var persona1 = new Persona("Juan", 30);
// persona1.saludar();
    
// class LatinoAmerica{
//     constructor() {
//         this.paises = [ ];
//     };
// };
// LatinoAmerica.prototype.agregarPais = function(pais){
//     this.paises.push(pais);
// };
// let continente = new LatinoAmerica();
// continente.agregarPais("Perú");
// console.log(continente.paises);

// class Persona {
//     constructor(nombre, edad) {
//        this.nombre = nombre;
//        this.edad = edad;
//     }
//     saludar() {
//        console.log(
//           'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
//        );
//     }
//  }
//  let martin = new Persona('Martin', 26);
//  martin.saludar();


 class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martin = new Persona('Martín', 26);
 let programador = new Programador('María', 37, 4);
 martin.saludar();
 programador.codear();