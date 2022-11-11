let name = 'isaac';
let sobrenome = 'lima';
let age = 16;

const person = {
    name,
    sobrenome,
    age,

    hello(){
        console.log('Hello');
    },
};

person.hello();


console.log(person);

/* COMO SERIA ANTES DO ES6 => {
  
    let nome = 'isaac';
let sobrenome = 'lima';
let age = 16;

const person = {
    nome = nome,
    sobrenome = sobrenome,
    age = age,

    hello: function(){
        console.log('Hello');
    },
};

person.hello();
}*/