/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var alfabeto ="abcdefghijklmnopqrstuwvxyz"
   var nuevoarreglo = string.split('')
   var arregloalfabetico = alfabeto.split('')
   
   var objet = {}
   for (var i = 0 ; i<string.split('').length ; i++){
      var counter = 0;
      var ordenado = string.split('').sort();
      for (var j=0 ; j<string.split('').length ; j++){
         if (ordenado[i]===ordenado[j]){
            counter+=1;
            
         }

      }
      objet[ordenado[i]]=counter;
   }
   return objet
}
 

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arreglostring = string.split('');
   var arreglomayuscula = string.toUpperCase().split('');
   var lista = [];
   var lista2 = [];
   for (var i = 0 ; i<arreglostring.length ; i++){
      if (arreglostring[i]===arreglomayuscula[i]){
         lista.push(arreglomayuscula[i])
      }
      else {
         lista2.push(arreglostring[i])
      }
   }
   return lista.concat(lista2).join('')
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var new_arreglo = numero.toString().split('')
   var new_list = []
   for (var i=new_arreglo.length-1 ; i>-1 ; i--){
      new_list.push(new_arreglo[i])
   }
   if (new_list.join('') === numero.toString()){
      return "Es capicua"
   }
   else {
      return "No es capicua"
   }
}
function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newarreglo = string.split('');
   var listanegada = ["a","b","c"];
   var new_listilla = [];
   for (var i=0 ; i<listanegada.length ; i++){
      for (var j=0 ; j<newarreglo.length ; j++){
         if (newarreglo[j]===listanegada[i]){
            new_listilla.push(j)
         }
      }
   }
   var listaa =[];
   for (var k=0 ; k<new_listilla.length ; k++){
      delete newarreglo[new_listilla[k]]
   }
   return newarreglo.join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var obj={};
   var lista = []
   for (var i=0 ; i<arrayOfStrings.length ; i++){
      var nuevoarreglo = arrayOfStrings[i].length
      obj[arrayOfStrings[i]]=nuevoarreglo
      lista.push(obj[arrayOfStrings[i]])
   }
   var new_lista = lista.sort()
   var newobj = {}
   
   for (var i = 0 ; i<arrayOfStrings.length ; i++){
      for (var j =0 ; j < arrayOfStrings.length ; j++){
         if (obj[arrayOfStrings[j]]===new_lista[i]){
               newobj[arrayOfStrings[j]]=new_lista[i]
         }
      }
            
   }
   return newobj
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var lista=[];
   if (array1.length>array2.length){
      for (var i = 0 ; i<array2.length ; i++){
         for (var j = 0 ; j<array1.length ; j++){
            if (array1[j]===array2[i]){
               lista.push(array2[i])
            }
         }
      }
   }
   else if (array2.length>array1.length){
      for (var i = 0 ; i<array1.length ; i++){
         for (var j = 0 ; j<array2.length ; j++){
            if (array2[j]===array1[i]){
               lista.push(array1[i])
            }
         }
      }
   }
   return lista
}
//buscoInterseccion([2,8,4,5],[1,2,3,4,5])
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
