/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var nombreseparado = nombre.split;
   var new_name = "";
   for (var i=0 ; i<nombreseparado.length ; i++){
      if (i===0){
         nombreseparado[i].toUpperCase()
      }
   }
   for (var i=0 ; i<nombreseparado.length ; i++){
      new_name += nombreseparado[i]
   }
   return new_name
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var retornarcb = cb;

}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var opermat = cb(num1,num2)
   return opermat
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var sumatorias=0;
   for (var i=0 ; i<arrayOfNumbers.length ; i++){
      sumatorias+=arrayOfNumbers[i]
   }
   var resultado = cb(sumatorias)
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (var i=0 ; array.length ; i++){
      cb(array[i])
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var new_list=[]
   for (var i=0 ; i<array.length ; i++){
      new_list.push(cb(array[i]))
   }
   return new_list
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var new_word="";
   var new_list=[]
   for (var i=0 ; i<arrayOfStrings.length ; i++){
      new_word=arrayOfStrings[i].split('')
      if (new_word[0]==="a"){
         new_list.push(arrayOfStrings[i])
      }
   }
   return new_list
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
