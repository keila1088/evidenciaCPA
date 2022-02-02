//ejemplo de default binding
const example = function(){
    console.log(this);
}


//ejemplo de implicit binding o invocacion de método
const objeto = {
    name: "foo",
    metodo: function(){
        console.log(`hola, me llamo ${this.name}`);
    }
};

objeto.metodo();

//ejemplo de explicit binding o invocacion indirecta

const objeto = {
    name: "foo",
    metodo: function(){
        console.log(`hola, me llamo ${this.name}`);
    }
};

const nuevoObjeto = {
    name: "sarasa"
};
//ejemplo de utilizacion de metodo call 
objeto.metodo.call(nuevoObjeto);

//ejemplo 1 de utilizacion de metodo bind
const variableRandom = objeto.metodo.bind(nuevoObjeto);
saveButton.addEventListener("click", variableRandom);

//ejemplo 2 de utilizacion de metodo bind
saveButton.addEventListener("click", objeto.metodo.bind(nuevoObjeto));

// ejemplo de new binding
function persona(nombre){
    this.name = nombre;
    console.log(this);
}

const sarasa2 = new persona('nombreRandom');

//ejemplo de lexical binding con arrow functions

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

