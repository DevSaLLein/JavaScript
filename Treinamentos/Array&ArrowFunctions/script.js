
console.log("------------------------- P E R C O R R E R  A R R A Y S-------------------------------");
//objeto
people = {
    name: "Isaac",
    idade: 16,
    email: "isaaclima@gmail.com",
};


pessoas = ['Isaac' , 'Beth' , 'Marcondes'];
pessoas.forEach( item => {
    
   console.log( item ); 

});

 // map pode obter um novo Array de um Array ja existente;
NovoArray = pessoas.map( item => {
    return item + " => ";
})
console.log(NovoArray);

var filaPessoas = ['pessoa1' , 'pessoa2' , 'pessoa3'];
console.log(filaPessoas);




console.log("------------------------------------ F I L A S -------------------------------");

pessoasFIFO = ['Cesar' , 'Carlinhos' , 'José'];

// Adiciona no final da fila
pessoasFIFO.push('Mariazinha');
console.log("{" + pessoasFIFO + "} => push(Mariazinha)");

// Remove o Primeiro da fila
pessoasFIFO.shift();
console.log("{" + pessoasFIFO + "} => shift()");

// Remove o último da fila
pessoasFIFO.pop();
console.log("{" + pessoasFIFO + "} => pop()");

// Adiciona ao início da fila FURÃO XD
pessoasFIFO.unshift('Furão');
console.log("{" + pessoasFIFO + "} => unshift(furaoXD)")

console.log("------------------------- F U N Ç Õ E S  A V A N Ç A D A S ---------------------------");

filaNumeros = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
//Novo Array 
console.log("(" + filaNumeros + ")  => Sequência original ");
 filaNumerosPares = filaNumeros.filter(
    item => {
        return item % 2 == 0;
    });
console.log("(" + filaNumerosPares + ") => Sequência com filter() ");

// novo array utilizando o método map e filtrando-o
let filaNumerosNova = filaNumeros.map (
    item => {
        return item * 10 / 2;
        filter( item =>{
            return item % 3 == 0;
        });
    });
console.log("(" + filaNumerosNova + ") => Sequência com map i filter() ");

//False or True
console.log( filaNumerosNova.some( item => {
    item / 5 == 10;
}) + " <= função some()");

console.log( filaNumerosNova.findIndex( item => {
    item % 5 == 0;
}) + " <= função findIndex");

//reduce()
console.log("REDUCE()")

arrayReduce = [ 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

const soma = arrayReduce.reduce((obj , item) => {
    console.log(obj + " => " + item);

    return obj + item;

}, 0 // <== primeira instancia da nova estrutura de dados( acc )
);

console.log("soma de todos ==>" + soma);


console.log("===========================");


var frutas = ['banana' , 'maçã' , 'uva' , 'abacaxi' ];
var numeros = [2 , 9 , 2 ,4 , 8 , 10];

var numeros2x = numeros.map( (item) => {
    return item * 20
       
});




console.log(numeros2x)