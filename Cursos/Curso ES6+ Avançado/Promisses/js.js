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

        console.log(data);

    })
//Em caso de reject =>
    .catch( (err) => { console.log(err) });
