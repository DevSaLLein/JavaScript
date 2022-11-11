function hello( name = 'Isaac', surname = 'Lima') {
    console.log(`Hello ${name} ${surname}! How are you?`);
}

hello();

console.log('-------');

hello('Beth' , 'Dos Santos');


/* { 
    ==> Caso o internauta não passe nenhum valor aceitável
para name e para surname, os valores padrões
serão o 'Isaac' e o 'Lima' respectivamente;
}*/