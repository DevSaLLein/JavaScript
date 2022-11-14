var defer = new Promise((resolve , reject) => {
    
    setTimeout(() => {
        
        if(true) {
            resolve('Hello, Está funcionando!');
        } else {
            reject('[ERROR]!');
        }

    }, 2000);

});

defer
//Em caso de resolve =>
    .then( (data) => { 

        console.log(data);
        return 'Isaac'; 

    })
//Vai receber o return do de cima!
    .then( (data) => {

        console.log(` Quem está usando: ${data}`);

    })
    //Em caso de reject =>
    .catch( (err) => { console.log(err) })

    .finally(data => console.log('-------------'))


    // E X E M P L O  D E  P R O M I S E

    var posts = fetch('https://api.github.com/users/diego3g');

    posts
        //Estamos passando o tipo de dado para JSON;
        .then( data => data.json() )
        //Primeiro deve-se converter o dado, para depois manipulá-lo;
        .then( data => {
            console.log(data)
            throw new Error('Ixi deu error! :/')
        })
        .catch( err => console.log(err))


        /*
        FETCH => {

            -> É o famoso AJAX, porém diferente de um AJAX comum, 
            o fetch utiliza os protocolos de uma Promise;

            -> Espera receber QUALQUER tipo de dado;
        }
    */

    //O U T R O  E X E M P L O  D E  P R O M I S E

const currency = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve({
            currency: 'euro', 
            value: 3.50
        });
    }, 2000);
});

const countries = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve([
            'Ireland', 'England', 'Scotland'
        ]);
    }, 600)
});

Promise
    //APENAS depois de resolver todas as promises passadas
    // é que ele irá fazer as outras ações( .then );
    .all( [currency, countries] )
    .then( data => console.log(data) )

Promise
    // Uma 'Corrida';
    //Após a primeira promise for resolvida, ignora toda as outras;
    .race( [currency, countries] )
    .then( data => console.log(data) )
    //['Ireland', 'England', 'Scotland'];