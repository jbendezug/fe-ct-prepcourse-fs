function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
 
    let array = [];
    for (let i = 1; i<= 10; i++){
        num += 2;
        array.push(num);
        if (num === i) {
            return "Se interrumpió la ejecución";
        }
 
    }return array;
 
 }
 const numero = 1;
 const resultado = breakStatement(numero);
 console.log(resultado);