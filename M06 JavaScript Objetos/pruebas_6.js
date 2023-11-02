/*var persona = {nombre : 'Lucas', edad : 26, estudios: {esProgramador: true}};
console.log(persona.nombre);

var misFunciones = {
    saludar : function(){
    console.log("Hola")
}}
misFunciones.saludar();*/

var atuendos = {manos:['Guantes', 'Anillos'], pies: ['Zapatos', 'Medias']};
console.log(atuendos.pies);

var libro = {autor: 'Borges', genero: 'Policial', año: '1990'};
var tienePropiedad = libro.hasOwnProperty('autores');
console.log(tienePropiedad);

var mascota = {
    animal: 'Perro',
    raza: 'Doverman',
    amistoso: 'true',
    dueño: 'Piero Bendezù',
    info: function(){
        console.log("mi perro es un " + this.raza );
    }
}
mascota.info();
