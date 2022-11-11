let text = 'bla true true false';
repetir = 'lol ';

console.log(text.startsWith('bla' , 4) + " <== método startsWith()");
console.log(text.endsWith('fals' , 18) + " <== método endsWith()"); // Contou até  o 'fals' ignorando o 'E';
console.log(text.includes('false') + " <== método includes()");
console.log(repetir.repeat(3) + " <== método repeat()");


/*

método startsWith() ==> {

('recebe o teste  ' ,' recebe a partir de qual índice deve iniciar a busca' );

}

método includes() ==> {

    recebe nos parâmetros a string que você quer encontrar;
}

*/