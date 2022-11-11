console.log(' F I N D ');

const num = [ -10 , 3 , -1 , -2 , 10];
const underZero = num.find( (x) => x > 0 );
console.log(underZero);


/* 

array.find() => {

    -> Retorna o primeiro valor encontrado seguindo o teste lógico da função;
    -> em seu parâmetro recebe uma função;
    -> e nessa função terá um teste lógico;
    -> no exemplo és uma arrow function que está retornando o x > 0 
}

*/
console.log(' F I N D I N D E X');

const numKey = [ -10 , 3 , -1 , -2 , 10];
const underZeroKey = numKey.findIndex( (x) => x > 0 );
console.log(underZeroKey);

/* 

array.findIndex() => {

    -> praticamente a mesma coisa do anterior, porém agora retorna a key onde se encontra
    o valor;
}


*/


console.log(' A V A N Ç A D O');

const user = [
    
    {
        name: 'Isaac',
        age: 16,
        city: 'Canada'
    } 
    ,
    {
        name:'Marcos',
        age: 4,
        city: 'New York'
    }

];

const UserIsaac = user.find( (person) => person.name === 'Isaac');
const UserMarcos = user.find( (person) => person.name === 'Marcos');

console.log(UserIsaac);
console.log(UserMarcos);