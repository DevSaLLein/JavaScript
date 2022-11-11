 console.log('--------------- V A R I Á V E I S ------------------')
//[ERROR] => pois a var animal pertence ao escopo da function say();

// function say() {
//     var a = 'cat';
//     console.log(a);
// }

// say();
// console.log(a);

// M A N E I R A  C O R R E T A

var b; // Variável declarada;

function say2() {
    b = 'dog'; // Valor atribuído á variável
    console.log(b);
}
say2();

console.log(b);


console.log('----------- L E T ---------------');

// [ERRO] => Pois não podemos declarar duas variáveis com o mesmo nome no mesmo escopo, nesse caso, o Global;
// var animal = 'cat';
// let animal = 'arara';

// M A N E I R A  C O R R E T A 

var animal = 'cat';
console.log(animal + '<===Escopo Global');

{ // Um novo Escopo
    let animal = 'arara';
    console.log(animal + '<===Escopo Criado');
}



console.log('------------------ C O N S T -----------------')
//C o n s t a n t e s <=>
// Variável ""I M U T´A V E L"";
// Mesmo assim ela pode mudar, veja um exemplo ==>

const user = {
    name: 'Isaac',
    age: 32,
};

console.log(user); // {name: 'Isaac , age: 32}

user.age = 16;

console.log(user) // {name: 'Isaac' , age: 16}

// Nós nao podemos declarar a mesma varíável com valores diferentes ( reatribuir )
// Mas podemos sim alterar como no exemplo uma propriedade de um OBJETO

Object.freeze(user)  // <== Isso sim seria imutável
