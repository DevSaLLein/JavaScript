const city = 'Fortaleza';
const otherthing = 'love';
const pais = 'Brazil';

function green(template , ...values) {
    return template.reduce((acc , part , i) => {
        return `
            ${acc}  
            <span class='green'>${values[ i - 1 ].toUpperCase()}</span>
            ${part}
        `
    });
}


const msg = green`Eu sinto muito${otherthing} por morar em ${city}, ${pais}. És uma bela cidade `;

document.body.innerHTML = msg;

/*{
Template -> Vai pegar o código como um todo tirando as variáveis
 <>Vai vir em forma de ARAAY => { 

 [0] => Eu sinto muito
 [1] => por morar em
 [2] => ,
 [3] => És uma bela cidade
}

... values -> Pega as variáveis(city , otherthing , pais)
 <>Vai vir também em forma de ARRAY => {
 
 [0] => otherthing{love},
 [1] => city{Fortaleza},
 [2] => pais{Brazil},
}
 <> Por ter -1 índice que o template, colocamos -1 para termos a variável correta;

ACC -> Pega a primeira parte do código (eu sinto muito);
part -> Pega o resto sem ser o template[0](eu sinto muito);


}*/