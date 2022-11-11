let a = 204;
let b = 1000;

console.log('a: ', a);
console.log('b: ', b);

[a , b] = [ b , a];

/* 
 O QUE ESTÁ ACONTECENDO? =>  {
    -> a var A ta recebendo o valor de B
    e var B ta recebendo o valor de A;
 }

*/
console.log('--------------------');

console.log(`valor de A depois: ${a}`);
console.log(`valor de B depois: ${b}`);