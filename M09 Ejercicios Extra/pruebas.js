// function mayorMenor(numeros){
//   //[9, 17, 6, 2, 4] ---retorna [2, 17]

//   let nuevoArray = [];
//   numMayor = -Infinity;
//   numMenor = Infinity;
  
//   for(let i=0; i<numeros.length; i++){
//     if(numeros[i]>numMayor){
//       numMayor=numeros[i];
//     }else if(numeros[i]<numMenor){
//       numMenor=numeros[i];
//     }
    
//   }
//   //nuevoArray.push(numMenor,numMayor);
//   return [numMenor, numMayor];
// }


// console.log(mayorMenor([9, -17, 6, -8, -2, 4,400000]));



//2 - pregunta henry chaleng
// let numbers = [1503, 85, 64, 32, 222221, 74, 98, 211, 678];
// function mayorPar(numeros){
//   let newArray = [];
//     numMayor= 0;

//   for (let i = 0; i<numeros.length; i++){
//     if (numeros[i]>numMayor){
//       numMayor = numeros[i];
//     }
// }
// if(numMayor % 2 ===0){
//   newArray.push(numMayor, true);
// }else if (numMayor % 2 != 0)
// newArray.push(numMayor, false); 

// return newArray;
// }


// console.log(mayorPar(numbers));


//3
let arrayEjem=['ho', 'hol', 'hola', 'com'];
function mismaCantidadCaracteres(strings, caracteres){
  //la funcion recibe como argumento un arreglo de string llamado "strings"
  //y un numero entero llamado "caracteres"
  //debe retornar un array  ejem: (['ho', 'hol', 'hola', 'com'],3) devuelve ['hol', 'com']
  let newArray = [];
  for(let i = 0; i < strings.length; i++){
    if(strings[i].length === caracteres){
      newArray.push(strings[i]);
    }
  }
  return newArray;

}
console.log(mismaCantidadCaracteres(arrayEjem,2))