/*
  PARTE 1
 1. Obtener el formulario, el botón y ambos inputs y guardarlos en variables.
 2. Agregar un event listener para el evento submit del formulario.
 3. Prevenir el comportamiento por default del evento submit.
 4. Mostrar en consola el mensaje guardado en la variable FORM_ON_SUBMIT_MSG.
 
 * PARTE 2
 * 1. Crear una función en el scope global para validar que el password tenga como mínimo 6 caracteres de largo.
 * 2. Si el password es inválido, mostrar en consola el mensaje guardado en la variable PASSWORD_INVALID_MSG, y salir de la ejecución de la función.
 * 3. Si el password es válido, mostrar en consola el mensaje guardado en la variable PASSWORD_VALID_MSG.
 * 
 * PARTE 3
 * 1. Obtener el div padre del formulario y guardarlo en una variable.
 * 2. Agregar un event listener para el evento click en el div padre y mostrar en consola el mensaje PARENT_ON_CLICK_MSG.
 * 3. Agregar un event listener para el evento click en el botón y mostrar en console el mensaje BTN_ON_CLICK_MSG.
 * 4. Lograr que el listener en el div padre se ejecute antes que el listener en el elemento target (el botón) usando capture phase.
 */

const PASSWORD_INVALID_MSG = 'The password is invalid';
const PASSWORD_VALID_MSG = 'The password is valid';
const PARENT_ON_SUBMIT_MSG = 'Submit event triggered in parent';
const FORM_ON_SUBMIT_MSG = 'Submit event triggered in form';

const formulario = document.getElementById("form");
const contentDiv = document.getElementById("parent");
const saveContent = document.getElementById("parent");
const saveButton = document.getElementById("submitBtn");
const mail = document.getElementById("email");
const pass = document.getElementById("password");

// FUNCION QUE VALIDA LA LONGITUD DE LA CONTRASEÑA
function passValidator(length) {
  const isValid = length < 6 ? PASSWORD_INVALID_MSG:PASSWORD_VALID_MSG;
  console.log(isValid);
}


// DETENER EL COMPORTAMIENTO POR DEFAULT DEL NAVEGADOR CON EL EVENTO SUBMIT, ALMACENAR EN VARIABLE LA LONGITUD DE LA CONTRASEÑA Y EJECUTAR FUNCION UBICADA EN SCOPE GLOBAL PARA VALIDARLA
formulario.addEventListener("submit", function (event){
    event.preventDefault();
    passValidator(pass.value.length);
  }
)

//MUESTRA EN CONSOLA DE LA VARIABLE SOLICITADA
console.log(FORM_ON_SUBMIT_MSG);

saveContent.addEventListener("click", function (event){
  console.log(PARENT_ON_SUBMIT_MSG);
}, true);

saveButton.addEventListener("click", function(){
  console.log("inside event click");
});