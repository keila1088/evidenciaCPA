const objeto = {
    name: "foo",
    lastName: "figthers",
    metodo: function(){
        const showldLastName = () => {
            console.log(this.lastName);
        }
        console.log(this.name);
        showldLastName();
    }
};

function persona(nombre){
    this.name = nombre;
    console.log(this);
}

const sarasa2 = new persona('Keila');



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
  //console.log(isValid);
}


// DETENER EL COMPORTAMIENTO POR DEFAULT DEL NAVEGADOR CON EL EVENTO SUBMIT, ALMACENAR EN VARIABLE LA LONGITUD DE LA CONTRASEÑA Y EJECUTAR FUNCION UBICADA EN SCOPE GLOBAL PARA VALIDARLA
formulario.addEventListener("submit", function (event){
    event.preventDefault();
    passValidator(pass.value.length);
  }
)

//MUESTRA EN CONSOLA DE LA VARIABLE SOLICITADA
//console.log(FORM_ON_SUBMIT_MSG);

saveContent.addEventListener("click", function (event){
  //console.log(PARENT_ON_SUBMIT_MSG);
}, true);

/*saveButton.addEventListener("click", function(){
  //console.log("inside event click");
});*/

saveButton.addEventListener("click", sarasa2);
