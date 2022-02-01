//ejemplo de implicit binding o invocacion de método
const objeto = {
    name: "foo",
    metodo: function(){
        console.log(this.name);
    }
};

objeto.metodo();

