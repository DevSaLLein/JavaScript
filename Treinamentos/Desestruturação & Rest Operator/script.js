// const user = {
//     nome: 'Isaac',
//     idade: 14,
//     num: 88027922
// }

// const { nome: name, ...rest} = user;
// document.body.innerHTML = name.toUpperCase();

// document.body.innerHTML +=  ` ${JSON.stringify(rest)}`;

// nulo = prompt("qual o seu nome:");

// if ( nulo === '') {
//     alert('Não informado');
// } else if(nulo == null || nulo === undefined){
//     alert('Não informado');
// } else {
//     alert(nulo);
// }   
// addEventListener("keydown" , teclado);
document.querySelector("#button").addEventListener( "click" , clickar);

function clickar() {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    
    const user = {
        name ,
        age        
    };

    console.log((user.name ?? "Não informado"));

    const { name: nome , ...restinho} = user;
    
    // alert(nome);
    // alert(JSON.stringify(restinho))

}


function teclado() {
    alert("OIIIIE");
} 

var textinho = document.getElementsByTagName("h1")[0].addEventListener("mouseover" , mouse);

function mouse() {
    console.log("Ai que delícia passa o mouse mais vai...");
    var textinho = document.getElementsByTagName("h1")[0];

    if( textinho.style.background="black") {
        textinho.style.background="white";
    } else if(textinho.style.background="white"){
        textinho.style.background="black";
    }

}
