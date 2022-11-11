let back =  ['Vue', 'Angular', 'React'];
let front = ['Python', 'Ruby', 'node.js'];

[back , front] = [front , back];

console.log('F R O N T');
console.log([... front]);

console.log('B A C K');
console.log([... back]);

console.log([... 'Isaac']);

/* 
 J U N T A N D O  O S  D O I S  A R R A Y 
*/

console.log(' J U N Ç Ã O  D A S  D U A S');
let fullStack = [...back,'HTML', ...front ];

console.log(fullStack);


// TESTES
const I = 'I';
const array = [];
document.querySelector('.button').onclick = function(){
    clicou()
}

function clicou(){
    array.push(... I.repeat(10));
    console.log(...array);
}
