window.onload = function() {
    document.getElementById("img").onclick = ligar;
    setInterval(clock , 1000);
    var Cookie = prompt("Qual o seu nome?");
    localStorage.setItem("nome" , Cookie);
    alert(Cookie);
}
function ligar() {
    document.getElementById("img").src = "lamon.png";
    setTimeout("desligar()", 2000);
}

function desligar(){
    document.getElementById("img").src = "lamoff.png";
}
function clock(){
    var clock = document.getElementById("clock");
    var h = new Date();
    var horaA = `${h.getHours()} : ${h.getMinutes()} : ${h.getSeconds()} `;
    clock.innerHTML = horaA;
}



