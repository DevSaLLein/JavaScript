window.onload = function() {
    Carregar();
    img = document.getElementsByTagName("img");
    for(i = 0 ; i <img.length ; i++){
     img[i].onclick =  verificar(i);
    }
}
function verificar(poltronas){
    return function() {
        src = document.getElementsByTagName("img")[poltronas].src;
        msg = "";
        if(src.indexOf("disponivel.png") > 0 ) {
            msg = "Poltrona disponivel";
        } else if(src.indexOf("indisponivel.jpg") > 0 ) {
            msg = "Poltrona indisponivel";
        } else {
            msg = "Esta poltrona é sua";
        }
        alert(msg);
    }
}
poltronas = [ 
    false , true , true , true , false , true , true, false , false 
];
function Carregar(){
    img = document.getElementsByTagName("img");
    for (i = 0 ; i < img.length ; i++){
        if(poltronas[i]) {
            img[i].src = "disponivel.png";
        } else {
                img[i].src = "indisponivel.jpg";
            } 
    }
}
function Solteiro() {
    img = document.getElementsByTagName("img");
    for( i = 0 ; i<img.length ; i++){
        if(poltronas[i]) {
            img[i].src = "selecionada.png";
            val = confirm("Você quer esta poltrona?");
            if(val) {    
                break;
            } else {
                img[i].src = "disponivel.png";           
            }
        } 
    }
}
function Casal() {
    img = document.getElementsByTagName("img");
    for(i = 0 ; i<img.length ; i++) {
        if(poltronas[i] && poltronas[i+1]) {
            img[i].src = "selecionada.png";
            img[i+1].src = "selecionada.png";
            var val = confirm("Queres estas poltronas?");
            if(val){
                break;
            } else {
                img[i].src = "disponivel.png";
                img[i+1].src = "disponivel.png";  
            }
        }
    }
}
