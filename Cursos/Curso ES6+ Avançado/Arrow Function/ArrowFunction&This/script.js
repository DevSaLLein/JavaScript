

/*
    F U N C T I O N


const button = document.querySelector('#button');
button.addEventListener('click' , () => {
    console.log(this.id)
})

--> O THIS na function normal se referência ao Objeto
atual, aqui sendo a variável button que possui dentro dela
os atributos do input type button do HTML 


}*/


/*
    A R R O W 
        F U N C T I O N


const button = document.querySelector('#button');
button.addEventListener('click' , function() {
    console.log(this.id)
})

--> O THIS na arrow function leva em consideração
todo o contexto, logo aqui o THIS está substituindo
o Objeto WINDOW

--> No exemplo abaixo será apresentado um exemplo em que o
THIS estará substituindo um  outro Objeto sem ser o WINDOW

--> Arrows Functions facilitam demais a manipulação de functions
dentro de outras function;

*/

const sandwich = {
    bread: 'white',
    cheese: 'cheddar',

    prepare: function() {
        return `I want a sandwich with ${this.bread} bread and ${this.cheese}` 
    },

    make: function() {

        window.setTimeout(() => {

            console.log ( this.prepare());

        }, 1000);
    }
};

const button = document.querySelector('#button');

button.addEventListener('click' , function() { sandwich.make()});
