/* 
 PODE SER ÚTIL QUANDO NÃO SABEMOS QUANTOS
 PARÂMETROS;
*/

function multiply(mult, ...args){

    return args.map((arg) => {
        return arg * mult
    });
    
};

console.log(multiply(10, 6, 10, 5));

/* 

C O M O  P O D E R I A  S E R 

*/


function mult( multiplicador, arg1, arg2, arg3){

    arr = [];

    arr.push( arg1 * multiplicador);
    arr.push( arg2 * multiplicador);
    arr.push( arg3 * multiplicador);

    return arr;
}

console.log(mult(10, 6, 10, 5))

