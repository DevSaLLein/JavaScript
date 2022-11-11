console.log('C O N C A T E N A Ç Ã O  P A D R Ã O');

const user = {
    nome:'Isaac',
    age:16,
};

text = "Eu  me chamo " + user.nome + " e eu tenho " + user.age;

console.log(text);

frutas = "banana"
        + "\n"
        + "orange"
        +"\n"
        +"apple";

        
console.log(frutas);

        
console.log("C O M  T E M P L A T E ====>");

textTemplate = `Eu me chamo ${user.name} e eu tenho ${user.age}`;

console.log(textTemplate)

        
frutasTemplate = 
`Banana
Orange
Apple`;
        
console.log(frutasTemplate);


console.log('TEMPLATES PARA TAGS HTML=======>');

const article = {
    title: `Aprendendo Template Strings`,
    intro: `Uma breve explicação de como se utilizar templates strgins do 
    ES6 em seu código de hoje!`,
    body: ` : por se tratar de um conteúdo mais antigo, a qualidade de imagem/som em alguns vídeos pode não ser tão boa e alguns links podem estar desatualizados. Quanto ao conteúdo, 
    fique tranquilo, essas features são bem atuais e utilizadas 
    até hoje `,
    tags:[ 'es6' , 'js' , 'template-literal'],
    autor: 'Isaac'
};

function aparecerAutor(name){
    return (name) ? name : 'Desconhecido';
};

console.log(JSON.stringify(article));

const markup = `
<article> 
    <header>
        <h1>${article.title}</h1>
    </header>
    <section>
        <p>${article.intro}</p>   
    </section>
    <footer> 
        <ul>
            ${article.tags.map( (tag) => `<li>${tag}</li>`).join('')}
        </ul>
        <p> Autor: ${aparecerAutor(article.autor)} </p>

    </footer>
</article>
`;
document.body.innerHTML = markup;
