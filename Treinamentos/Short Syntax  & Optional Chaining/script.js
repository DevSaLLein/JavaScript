const name = 'Isaac';
const age = 16;
const key = 'name';

user = {
    name,
    age,
    address:{
        street: 'Imperatriz', 
        num: '151',
         TESTE(){
                return 'ok';
            }  
        },
    };


console.log( user?.[key]  || 'Não existe esse nome');
console.log( user.address?.TESTE?.() || "Não existe essa função");

