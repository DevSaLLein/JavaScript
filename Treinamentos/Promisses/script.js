// Faz uma requisição via https ==>

import { soma } from "./exportação/main";

// Isso é uma Promisse!
fetch('https://api.github.com/users/diego3g') 
    .then(response => {
        return response.json();
    })
    .then( body => {
        console.log(body); 
    }) // mesmo code do debaixo, porém melhor
    
    // .then( response => {
    //     response.json().then( body => {
    //         console.log(body);
    //     })
    // })
    


    .catch(error => {
        console.log(error);
    })

    // Vai executar independente se deu erro(catch) ou não(then)
    .finally( () => {
        console.log('Terminada a requisição!'); 
        console.log('------------------------------------------------');
    })


    

    
    // Exemplo da Promisse de cima, porém mais simplificada ===>

async function buscaDados() {
    try {
        const response = await fetch('https://api.github.com/users/diego3g');
        const body = await response.json();

        
        console.log(body)
        return body.name;

    } catch(error) {
        console.log(error);

    } finally {
        console.log('Terminada a requisição');
    }
}
// toda funcão em que coloco 'async' (assíncrona), ela vira automaticamente uma Promisse

// pegando o retorno da função
buscaDados().then(name => {
    console.log(name);
})






    //Exemplo de Promisse ===>
/*
const soma = (a , b) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(a + b);
        } , 2000);
    });
};

soma(1 , 3)
    .then( soma => {
        document.body.innerHTML = soma;
    })
    .catch(error => {
        console.log(error);
    })
*/

